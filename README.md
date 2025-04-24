# Dapper - Sustainable Fashion Marketplace

A modern thrift fashion marketplace built with Next.js, focusing on sustainable and circular fashion economy.

## 🌟 Features

- **Buy**: Browse and bid on curated second-hand fashion items
- **Sell**: List items with an intuitive dashboard and management system
- **Donate**: Schedule pickup of gently used clothing items
- **Authentication**: Secure user accounts and profiles
- **Responsive Design**: Optimized for all devices

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠 Tech Stack

- **Frontend**: Next.js 13.5, React 18
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form, Zod
- **UI Components**: Radix UI

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── auth/            # Authentication pages
│   ├── buy/             # Product browsing and bidding
│   ├── sell/            # Seller dashboard and listings
│   └── donate/          # Donation scheduling
├── components/          # Reusable React components
├── lib/                 # Utilities and helpers
└── public/             # Static assets
```

## 🔒 Environment Variables

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## 📝 Development Guidelines

- Follow the component-first architecture
- Use TypeScript for type safety
- Implement responsive design using Tailwind breakpoints
- Add proper error handling and loading states
- Write meaningful comments for API integration points

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

MIT License - see LICENSE file for details