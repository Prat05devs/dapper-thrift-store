// Mock data for product listings
export const mockProducts = [
  {
    id: '1',
    name: 'Vintage Denim Jacket',
    brand: 'Levi\'s',
    description: 'Classic vintage denim jacket in excellent condition. Perfect for layering in any season.',
    price: 49.99,
    originalPrice: 120.00,
    condition: 'Excellent',
    size: 'M',
    color: 'Blue',
    category: 'Outerwear',
    tags: ['vintage', 'denim', 'jacket'],
    imageUrl: 'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/6347547/pexels-photo-6347547.jpeg',
      'https://images.pexels.com/photos/6347548/pexels-photo-6347548.jpeg'
    ],
    seller: {
      id: 'seller1',
      name: 'Vintage Treasures',
      rating: 4.8,
      sales: 128
    },
    listed: '2023-09-12T14:30:00Z',
    views: 243,
    favorites: 54
  },
  {
    id: '2',
    name: 'Wool Plaid Blazer',
    brand: 'Ralph Lauren',
    description: 'Sophisticated wool blazer with classic plaid pattern. Perfect for professional settings or dressed-up casual looks.',
    price: 68.50,
    originalPrice: 195.00,
    condition: 'Very Good',
    size: 'L',
    color: 'Brown',
    category: 'Blazers',
    tags: ['wool', 'plaid', 'blazer', 'professional'],
    imageUrl: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/6626904/pexels-photo-6626904.jpeg',
      'https://images.pexels.com/photos/6626905/pexels-photo-6626905.jpeg'
    ],
    seller: {
      id: 'seller2',
      name: 'UpscaleResale',
      rating: 4.9,
      sales: 87
    },
    listed: '2023-09-18T09:15:00Z',
    views: 118,
    favorites: 37
  },
  {
    id: '3',
    name: 'Silk Button-Up Blouse',
    brand: 'Equipment',
    description: 'Luxurious silk blouse in cream color. Versatile piece that can be dressed up or down.',
    price: 42.00,
    originalPrice: 230.00,
    condition: 'Like New',
    size: 'S',
    color: 'Cream',
    category: 'Tops',
    tags: ['silk', 'blouse', 'luxury'],
    imageUrl: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/6311476/pexels-photo-6311476.jpeg',
      'https://images.pexels.com/photos/6311477/pexels-photo-6311477.jpeg'
    ],
    seller: {
      id: 'seller3',
      name: 'LuxeSecondhand',
      rating: 4.7,
      sales: 215
    },
    listed: '2023-09-05T16:45:00Z',
    views: 301,
    favorites: 89
  },
  {
    id: '4',
    name: 'Leather Chelsea Boots',
    brand: 'Dr. Martens',
    description: 'Classic Chelsea boots in black leather. Barely worn, in excellent condition.',
    price: 85.00,
    originalPrice: 150.00,
    condition: 'Excellent',
    size: '8',
    color: 'Black',
    category: 'Shoes',
    tags: ['leather', 'boots', 'chelsea'],
    imageUrl: 'https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/6046184/pexels-photo-6046184.jpeg',
      'https://images.pexels.com/photos/6046185/pexels-photo-6046185.jpeg'
    ],
    seller: {
      id: 'seller4',
      name: 'UrbanThrift',
      rating: 4.6,
      sales: 143
    },
    listed: '2023-09-22T11:20:00Z',
    views: 187,
    favorites: 45
  },
  {
    id: '5',
    name: 'Cashmere Turtleneck Sweater',
    brand: 'J.Crew',
    description: 'Luxuriously soft cashmere turtleneck in camel color. Perfect for staying cozy in style.',
    price: 78.50,
    originalPrice: 168.00,
    condition: 'Very Good',
    size: 'M',
    color: 'Camel',
    category: 'Sweaters',
    tags: ['cashmere', 'turtleneck', 'sweater', 'winter'],
    imageUrl: 'https://images.pexels.com/photos/6348751/pexels-photo-6348751.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/6348752/pexels-photo-6348752.jpeg',
      'https://images.pexels.com/photos/6348753/pexels-photo-6348753.jpeg'
    ],
    seller: {
      id: 'seller5',
      name: 'CozyCloset',
      rating: 4.9,
      sales: 76
    },
    listed: '2023-09-14T15:10:00Z',
    views: 165,
    favorites: 42
  },
  {
    id: '6',
    name: 'Vintage High-Waisted Jeans',
    brand: 'Levi\'s',
    description: 'Authentic vintage Levi\'s 501 high-waisted jeans. Perfect worn-in look and feel.',
    price: 65.00,
    originalPrice: 110.00,
    condition: 'Good',
    size: '28',
    color: 'Medium Wash',
    category: 'Bottoms',
    tags: ['vintage', 'jeans', 'denim', 'high-waisted'],
    imageUrl: 'https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/8386669/pexels-photo-8386669.jpeg',
      'https://images.pexels.com/photos/8386670/pexels-photo-8386670.jpeg'
    ],
    seller: {
      id: 'seller6',
      name: 'DenimArchive',
      rating: 4.8,
      sales: 195
    },
    listed: '2023-09-07T12:30:00Z',
    views: 276,
    favorites: 68
  },
  {
    id: '7',
    name: 'Structured Leather Tote',
    brand: 'Madewell',
    description: 'Classic leather tote bag with structured silhouette. Spacious interior with multiple pockets.',
    price: 95.00,
    originalPrice: 178.00,
    condition: 'Like New',
    size: 'One Size',
    color: 'Tan',
    category: 'Bags',
    tags: ['leather', 'tote', 'bag', 'accessory'],
    imageUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg',
      'https://images.pexels.com/photos/1152079/pexels-photo-1152079.jpeg'
    ],
    seller: {
      id: 'seller7',
      name: 'BagBoutique',
      rating: 4.7,
      sales: 112
    },
    listed: '2023-09-19T10:15:00Z',
    views: 198,
    favorites: 53
  },
  {
    id: '8',
    name: 'Linen Shirt Dress',
    brand: 'Eileen Fisher',
    description: 'Easy, breezy linen shirt dress in natural color. Perfect for warm weather or beach vacations.',
    price: 70.00,
    originalPrice: 248.00,
    condition: 'Excellent',
    size: 'M',
    color: 'Natural',
    category: 'Dresses',
    tags: ['linen', 'dress', 'summer', 'shirt dress'],
    imageUrl: 'https://images.pexels.com/photos/6621384/pexels-photo-6621384.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/6621385/pexels-photo-6621385.jpeg',
      'https://images.pexels.com/photos/6621386/pexels-photo-6621386.jpeg'
    ],
    seller: {
      id: 'seller8',
      name: 'StyleRecycled',
      rating: 4.8,
      sales: 89
    },
    listed: '2023-09-08T14:50:00Z',
    views: 145,
    favorites: 38
  }
];

// Mock data for testimonials
export const mockTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Regular Buyer',
    quote: 'Dapper has transformed how I think about fashion. I\'ve found amazing, unique pieces that I treasure, all while knowing I\'m making a more sustainable choice.',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Seller & Buyer',
    quote: 'I started selling my unused clothes on Dapper and ended up becoming an avid buyer too! The platform is so easy to use, and the community feels like family.',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
  },
  {
    id: '3',
    name: 'Olivia Martinez',
    role: 'Fashion Blogger',
    quote: 'As someone in the fashion industry, I\'m amazed by the quality and uniqueness of items on Dapper. It\'s become my go-to for one-of-a-kind statement pieces.',
    imageUrl: 'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg'
  }
];

// Categories for filtering
export const productCategories = [
  { id: 'all', name: 'All Categories' },
  { id: 'outerwear', name: 'Outerwear' },
  { id: 'tops', name: 'Tops' },
  { id: 'bottoms', name: 'Bottoms' },
  { id: 'dresses', name: 'Dresses' },
  { id: 'suits', name: 'Suits & Blazers' },
  { id: 'shoes', name: 'Shoes' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'bags', name: 'Bags' },
  { id: 'jewelry', name: 'Jewelry' }
];

// Size options for filtering
export const sizeOptions = [
  { id: 'xs', name: 'XS' },
  { id: 's', name: 'S' },
  { id: 'm', name: 'M' },
  { id: 'l', name: 'L' },
  { id: 'xl', name: 'XL' },
  { id: 'xxl', name: 'XXL' },
  { id: '0', name: '0' },
  { id: '2', name: '2' },
  { id: '4', name: '4' },
  { id: '6', name: '6' },
  { id: '8', name: '8' },
  { id: '10', name: '10' },
  { id: '12', name: '12' },
  { id: '14', name: '14' },
  { id: '16', name: '16' }
];

// Condition options for filtering
export const conditionOptions = [
  { id: 'new', name: 'New with tags' },
  { id: 'like_new', name: 'Like new' },
  { id: 'excellent', name: 'Excellent' },
  { id: 'very_good', name: 'Very good' },
  { id: 'good', name: 'Good' },
  { id: 'fair', name: 'Fair' }
];

// Mock user data
export const mockUser = {
  id: 'user1',
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  joined: '2023-01-15T00:00:00Z',
  location: 'San Francisco, CA',
  bio: 'Fashion enthusiast with a passion for sustainable style.',
  favorites: ['1', '3', '7'],
  purchases: [
    {
      id: 'purchase1',
      productId: '5',
      date: '2023-08-10T14:30:00Z',
      amount: 78.50,
      status: 'Delivered'
    },
    {
      id: 'purchase2',
      productId: '2',
      date: '2023-07-24T09:15:00Z',
      amount: 68.50,
      status: 'Delivered'
    }
  ],
  listings: [
    {
      id: '9',
      name: 'Wool Beanie',
      price: 18.00,
      status: 'Active',
      views: 45,
      likes: 8,
      imageUrl: 'https://images.pexels.com/photos/5693891/pexels-photo-5693891.jpeg'
    },
    {
      id: '10',
      name: 'Vintage Silk Scarf',
      price: 24.50,
      status: 'Active',
      views: 32,
      likes: 6,
      imageUrl: 'https://images.pexels.com/photos/6348802/pexels-photo-6348802.jpeg'
    },
    {
      id: '11',
      name: 'Cotton Sundress',
      price: 35.00,
      status: 'Sold',
      views: 98,
      likes: 22,
      imageUrl: 'https://images.pexels.com/photos/6744288/pexels-photo-6744288.jpeg'
    }
  ]
};