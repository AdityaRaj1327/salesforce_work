'use client'

import { useState } from 'react'
import InfoIcon from './InfoIcon'

const initialImages = [
  '/images/placeholder.jpg',
  '/images/placeholder.jpg',
  '/images/placeholder.jpg',
]

export default function Gallery() {
  const [images, setImages] = useState(initialImages)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleAddImage = () => {
    const newImage = prompt('Enter image URL:')
    if (newImage) {
      setImages([...images, newImage])
    }
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= images.length - 3 ? 0 : prev + 1))
  }

  const visibleImages = images.slice(currentIndex, currentIndex + 3)

  return (
    <div className="bg-dark-card rounded-2xl p-6 shadow-xl">
      {/* Info Icon */}
      <div className="flex justify-end mb-4">
        <InfoIcon />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="bg-dark-surface rounded-full px-6 py-3">
          <h2 className="text-white font-medium">Gallery</h2>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleAddImage}
            className="bg-dark-surface hover:bg-dark-border transition-colors duration-200 rounded-full px-4 py-2 text-white text-sm font-medium shadow-lg flex items-center gap-2"
          >
            <span className="text-lg">+</span>
            ADD IMAGE
          </button>

          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="gallery-button"
              disabled={currentIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="gallery-button"
              disabled={currentIndex >= images.length - 3}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <div
            key={currentIndex + index}
            className="aspect-square rounded-xl overflow-hidden bg-gray-700 hover:scale-105 transition-transform duration-200"
          >
            <img
              src={image}
              alt={`Gallery image ${currentIndex + index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300/444/fff?text=Image'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
