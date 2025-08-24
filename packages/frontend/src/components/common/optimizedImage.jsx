import React from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}) => {
  // Convert the original image path to the optimized path structure
  const getOptimizedPath = (originalPath, size) => {
    // Handle external URLs
    if (originalPath.startsWith('http')) return originalPath;

    // Handle GIFs - return original path
    if (originalPath.toLowerCase().endsWith('.gif')) return originalPath;

    // Extract path parts
    const pathParts = originalPath.split('/assets/images/');
    if (pathParts.length !== 2) return originalPath;

    const imagePath = pathParts[1];
    const ext = imagePath.toLowerCase();

    // Get directory and filename
    const lastSlashIndex = imagePath.lastIndexOf('/');
    const directory = imagePath.substring(0, lastSlashIndex);
    const filename = imagePath.substring(lastSlashIndex + 1);

    // Convert PNG to WebP for better performance
    const newExt = ext.endsWith('.png')
      ? '.webp'
      : ext.slice(ext.lastIndexOf('.'));
    const newFilename = filename.replace(/\.[^/.]+$/, '') + newExt;

    return `/assets/optimized/${directory}/${size}/${newFilename}`;
  };

  return (
    <img
      src={getOptimizedPath(src, 'md')} // Default to medium size
      srcSet={`
				${getOptimizedPath(src, 'sm')} 640w,
				${getOptimizedPath(src, 'md')} 1024w,
				${getOptimizedPath(src, 'lg')} 1920w
			`}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={(e) => {
        // Fallback to original image if optimized version fails to load
        e.target.onerror = null;
        e.target.src = src;
      }}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  sizes: PropTypes.string,
};

export default OptimizedImage;
