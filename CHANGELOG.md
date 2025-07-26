# Receipt Generator Changelog

## Version 2.1.0 (2025-07-26)

### Date & Time Improvements
- Receipt dates now randomly generate within last 14 days (previously any date)
- Receipt times now between 7 AM and 9 PM for realism
- Multiple receipt generation also follows 14-day rule

### Address Updates
- Fixed all "NEAREST" placeholder addresses to use actual store locations
- Kroger: 3280 Dauphin St, Mobile, AL 36606
- Whole Foods: 3420 Veterans Blvd, Metairie, LA 70002
- Trader Joe's: 1489 Market St, Tallahassee, FL 32312
- Rite Aid: 852 Downtowner Loop W, Mobile, AL 36609

### Barcode Enhancements
- Complete overhaul of barcode patterns for each store chain
- Added store-specific prefixes (HD, PUB, WFM, TJ, KR, RA, etc.)
- Enhanced formats matching real receipts:
  - Walmart: TC# format with full timestamp
  - Target: Receipt ID format SSSS-RRRR-TTTTTT-MMDD
  - CVS/Walgreens: Store-Date-Transaction with full year
  - Costco: Space-separated date components
  - Sam's Club: SC prefix with date/time
  - Dollar General: DG prefix format
  - And unique formats for all other stores

## Version 2.0.0 (2025-07-24)

### Major Features
- Added 6 new stores: Kroger, 7-Eleven, ALDI, Whole Foods, Trader Joe's, and Rite Aid
- Implemented toggle switches replacing all checkboxes
- Added "Colorful Mode" toggle for ASCII decorations vs plain text
- Enhanced receipt counter with localStorage persistence

### Visual Improvements
- Store logos now use brand-specific colors
- ASCII decorations appear only in colorful mode
- Modern toggle switch animations
- Improved mobile responsiveness

### Payment Updates
- Standardized all payments to AMEX
- Consistent card ending across all receipts
- Realistic expiration dates (1-3 years future)
- Enhanced auth code generation

### Bug Fixes
- Fixed "Randomize x5" to respect store selection
- Fixed counter positioning on mobile
- Improved receipt spacing for multiple receipts

## Version 1.2.0 (2024-12-18)
- Added receipt generation counter
- Expanded Walmart items from 15 to 30
- Added toast notifications

## Version 1.1.0 (2024-12-17)
- Added random store checkbox
- Improved print formatting
- Added more realistic item variations

## Version 1.0.0 (2024-12-16)
- Initial release
- 12 store support
- Basic receipt generation
- Custom item support