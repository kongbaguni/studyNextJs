/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains : ['lh3.googleusercontent.com'],
  },
}

const withImages = require('next-images')
module.exports = withImages()