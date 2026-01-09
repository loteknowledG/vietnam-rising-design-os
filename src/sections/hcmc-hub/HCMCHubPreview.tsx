import data from '@/../product/sections/hcmc-hub/data.json'
import type { Job, City, Platform } from '@/../product/sections/hcmc-hub/types'
import { fetchTopJobsFromRssFeed } from '@/lib/rss-jobs'
import { HCMCHub } from './components/HCMCHub'
import { useEffect, useMemo, useState } from 'react'

/**
 * HCMC Hub Preview
 * Feeds sample data into the HCMCHub component for Design OS.
 */
export default function HCMCHubPreview() {
    // Cast data since it's imported from JSON
    const cityData = data.city as unknown as City
    const fallbackJobsData = useMemo(() => data.jobs as unknown as Job[], [])
    const platformsData = data.platforms as unknown as Platform[]

    const [jobsData, setJobsData] = useState<Job[]>(() => {
        // Keep floors capped to the building height in case sample data grows.
        return fallbackJobsData.slice(0, cityData.totalFloors)
    })

    const feedUrls = useMemo(
        () => [
            'https://rss.app/feeds/3NRkGwpUDJrBFayN.xml',
            'https://rss.app/feeds/DAwks5mDooZBAfIF.xml',
            'https://rss.app/feeds/m91YmYkroZd5nKEU.xml'
        ],
        []
    )

    useEffect(() => {
        let cancelled = false

        // Fetch from multiple feeds in parallel
        Promise.all(
            feedUrls.map((feedUrl) =>
                fetchTopJobsFromRssFeed({
                    feedUrl,
                    city: cityData,
                    maxJobs: cityData.totalFloors,
                    platformId: 'itviec'
                }).catch((err) => {
                    console.warn(`Failed to fetch from ${feedUrl}:`, err)
                    return []
                })
            )
        )
            .then((feedResults) => {
                if (cancelled) return

                // Combine all feeds and deduplicate by sourceUrl
                const allJobs = feedResults.flat()
                const seenUrls = new Set<string>()
                const uniqueJobs = allJobs.filter((job) => {
                    if (seenUrls.has(job.sourceUrl)) return false
                    seenUrls.add(job.sourceUrl)
                    return true
                })

                if (uniqueJobs.length === 0) return

                // Pad with sample data if needed
                const usedUrls = new Set(uniqueJobs.map((j) => j.sourceUrl))
                const padded = [
                    ...uniqueJobs,
                    ...fallbackJobsData.filter((j) => !usedUrls.has(j.sourceUrl))
                ].slice(0, cityData.totalFloors)

                // Reassign floor numbers so we always populate 81 floors.
                const withFloors = padded.map((job, idx) => ({
                    ...job,
                    floorNumber: Math.max(1, cityData.totalFloors - idx)
                }))

                setJobsData(withFloors)
            })
            .catch((err) => {
                // RSS feeds can fail in-browser due to CORS; keep sample data as fallback.
                console.warn('Failed to load live RSS jobs; using sample data instead.', err)
            })

        return () => {
            cancelled = true
        }
    }, [feedUrls, cityData, fallbackJobsData])

    return (
        <HCMCHub
            city={cityData}
            jobs={jobsData}
            platforms={platformsData}
            onViewSource={(url) => {
                console.log('Navigate to source:', url)
                window.open(url, '_blank')
            }}
            onFloorReached={(floor) => {
                console.log('User reached floor:', floor)
            }}
        />
    )
}
