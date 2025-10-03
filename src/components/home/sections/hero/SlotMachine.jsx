import React, { useState, useEffect, useRef } from 'react'

/**
 * SlotMachine Component
 * 
 * A reusable slot machine animation component that cycles through items
 * with smooth vertical transitions.
 * 
 * @param {Object} props
 * @param {string[]} props.items - Array of items to display in the slot machine
 * @param {React.ReactNode} props.icon - Icon to display before the text
 * @param {'left' | 'right'} props.position - Position relative to the title
 * @param {number} [props.duration=2500] - Duration each item is displayed (ms)
 * @param {string} [props.ariaLabel] - Accessibility label for screen readers
 * @param {string} [props.className] - Additional CSS classes
 */
const SlotMachine = ({ 
  items, 
  icon, 
  position, 
  duration = 2500, 
  ariaLabel,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)
  const resumeTimeoutRef = useRef(null)

  // Cycle through items infinitely
  useEffect(() => {
    if (!isPaused && items.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      }, duration)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, duration, items.length])

  // Handle mouse enter - pause animation
  const handleMouseEnter = () => {
    setIsPaused(true)
    
    // Clear any pending resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
  }

  // Handle mouse leave - resume animation after delay
  const handleMouseLeave = () => {
    // Add a small delay before resuming
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 300)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`slot-machine-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label={ariaLabel}
      aria-live="polite"
      data-position={position}
    >
      <div className="slot-machine-inner">
        {/* Icon */}
        <div className="slot-icon">
          {icon}
        </div>

        {/* Slot Reel Container */}
        <div className="slot-reel-container">
          <div 
            className="slot-reel"
            data-testid="slot-reel"
            style={{
              transform: `translateY(-${currentIndex * 100}%)`
            }}
          >
            {items.map((item, index) => (
              <div 
                key={index} 
                className="slot-item"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlotMachine
