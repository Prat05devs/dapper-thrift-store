# Backend Implementation Guide for Dapper

## Table of Contents
1. Project Setup
2. Database Schema
3. API Endpoints
4. Authentication
5. File Upload
6. Payment Integration
7. Email Service
8. Testing
9. Deployment

## 1. Project Setup

### Technology Stack
```bash
# Core Dependencies
express
mongoose
cors
dotenv
jsonwebtoken
bcryptjs
multer
cloudinary
stripe
nodemailer
joi
helmet
morgan
compression
```

### Project Structure
```
backend/
├── config/
│   ├── database.js     # MongoDB connection
│   ├── cloudinary.js   # Cloudinary setup
│   └── email.js        # Email service config
├── controllers/
│   ├── auth.js
│   ├── products.js
│   ├── bids.js
│   ├── donations.js
│   └── users.js
├── middleware/
│   ├── auth.js         # JWT verification
│   ├── upload.js       # File upload handling
│   └── validate.js     # Request validation
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Bid.js
│   └── Donation.js
├── routes/
│   ├── auth.js
│   ├── products.js
│   ├── bids.js
│   └── donations.js
├── utils/
│   ├── errorHandler.js
│   └── emailTemplates.js
└── server.js
```

## 2. Database Schema

### User Schema
```javascript
{
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'admin'] },
  listings: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  bids: [{ type: Schema.Types.ObjectId, ref: 'Bid' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  createdAt: Date,
  updatedAt: Date
}
```

### Product Schema
```javascript
{
  name: String,
  description: String,
  price: Number,
  originalPrice: Number,
  condition: { type: String, enum: ['New', 'Like New', 'Good', 'Fair'] },
  size: String,
  brand: String,
  category: String,
  images: [String],
  seller: { type: Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['Active', 'Sold', 'Pending'] },
  bids: [{ type: Schema.Types.ObjectId, ref: 'Bid' }],
  views: Number,
  favorites: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Bid Schema
```javascript
{
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  bidder: { type: Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  message: String,
  status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'] },
  createdAt: Date
}
```

### Donation Schema
```javascript
{
  donor: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    type: String,
    description: String
  }],
  pickupDate: Date,
  pickupTime: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'] },
  specialInstructions: String,
  createdAt: Date
}
```

## 3. API Endpoints

### Authentication Routes
```javascript
POST /api/auth/signup
POST /api/auth/signin
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET /api/auth/verify-email
```

### Product Routes
```javascript
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
GET /api/products/featured
GET /api/products/search
```

### Bid Routes
```javascript
POST /api/bids
GET /api/bids/user/:userId
GET /api/bids/product/:productId
PUT /api/bids/:id/accept
PUT /api/bids/:id/reject
```

### Donation Routes
```javascript
POST /api/donations
GET /api/donations/user/:userId
PUT /api/donations/:id
DELETE /api/donations/:id
```

### User Routes
```javascript
GET /api/users/profile
PUT /api/users/profile
GET /api/users/favorites
POST /api/users/favorites/:productId
DELETE /api/users/favorites/:productId
```

## 4. Authentication

### JWT Implementation
```javascript
// Middleware example
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
```

### Password Security
- Use bcryptjs for password hashing
- Implement password reset functionality
- Add rate limiting for auth routes
- Store refresh tokens for session management

## 5. File Upload

### Cloudinary Integration
```javascript
// Upload middleware
const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'dapper',
      use_filename: true,
      unique_filename: true
    });
    return result.secure_url;
  } catch (error) {
    throw new Error('Error uploading file');
  }
};
```

### Image Processing
- Implement image resizing
- Generate thumbnails
- Optimize image quality
- Handle multiple file uploads

## 6. Payment Integration

### Stripe Setup
```javascript
// Payment intent creation
const createPaymentIntent = async (amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd'
    });
    return paymentIntent.client_secret;
  } catch (error) {
    throw new Error('Error creating payment intent');
  }
};
```

### Payment Flow
1. Create payment intent
2. Process payment
3. Handle webhooks
4. Send confirmation
5. Update order status

## 7. Email Service

### Nodemailer Setup
```javascript
// Email sending function
const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html
    });
  } catch (error) {
    throw new Error('Error sending email');
  }
};
```

### Email Templates
- Welcome email
- Password reset
- Bid notifications
- Order confirmations
- Donation receipts

## 8. Testing

### Test Setup
```javascript
// Example test
describe('Auth Controller', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('token');
  });
});
```

### Test Categories
- Unit tests
- Integration tests
- API endpoint tests
- Authentication tests
- Payment flow tests

## 9. Deployment

### Environment Variables
```
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret
EMAIL_FROM=your_email
EMAIL_PASSWORD=your_email_password
```

### Production Setup
1. Set up error logging
2. Configure rate limiting
3. Enable compression
4. Add security headers
5. Set up monitoring

### API Documentation
```javascript
/**
 * @api {post} /api/products Create Product
 * @apiName CreateProduct
 * @apiGroup Products
 * @apiHeader {String} Authorization Bearer token
 * @apiBody {String} name Product name
 * @apiBody {String} description Product description
 * @apiBody {Number} price Product price
 * @apiSuccess {Object} product Created product
 */
```

### Frontend Integration
Update the frontend environment variables:
```
NEXT_PUBLIC_API_URL=your_backend_url
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

Update API calls in frontend components:
```javascript
// Example API call
const fetchProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
```

### Security Checklist
- [ ] Implement rate limiting
- [ ] Add request validation
- [ ] Set up CORS properly
- [ ] Enable helmet security headers
- [ ] Implement API key authentication
- [ ] Set up error logging
- [ ] Configure SSL/TLS
- [ ] Sanitize user inputs
- [ ] Implement request timeouts
- [ ] Set up monitoring