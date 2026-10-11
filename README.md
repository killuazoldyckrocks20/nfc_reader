# 🍔 SeatBites — Cross-Platform Web App for Seat-Side Food Delivery

A zero-install, responsive Progressive Web Application that lets guests scan the NFC sticker or QR code on their armrest/seat and order fast food delivered directly to their seat.

---

## 🚀 Key Features

1. **Zero App Install Required**:
   - Runs directly in any web browser (Safari, Chrome, Firefox, Edge) on iOS, Android, macOS, Windows, Linux.
   - When a customer taps an NFC tag or scans a QR code using their phone's native camera, the web page opens instantly and automatically locks their seat location!

2. **Unified NFC & QR Tag Specification**:
   - Both NFC tags and QR codes contain the **exact same details** (Room/Hall, Row/Table, Seat Number).
   - Standard Payload Format:
     ```text
     SEAT_TAG|room=Cinema Hall 4 (IMAX)|row=Row F|seat=Seat 14|sys=SeatBites
     ```
   - Instant-Scan Direct URL (written to NFC chips or printed QR codes):
     ```text
     http://localhost:8088/?room=Cinema%20Hall%204&row=Row%20F&seat=Seat%2014&tag=qr
     ```

3. **Multi-Mode Seat Scanner**:
   - **NFC Tag Scanner**:
     - Native **Web NFC API** (`NDEFReader`) support on compatible mobile devices (Android/Chrome).
     - One-click interactive NFC chip simulations (Cinema IMAX, Grand Auditorium, VIP Stadium Lounge, Sports Bar Table) for effortless testing on any laptop or desktop.
   - **Camera QR Scanner**:
     - Built-in HTML5 camera scanner with aiming reticle and laser sweep animation.
     - One-click preset QR code tags.
   - **Manual Input**: Room, Row/Table, and Seat number selectors.
   - **Live QR & Tag Generator**: Interactive QR code generator that produces scannable QR codes for any seat in real-time.

4. **Extensive Fast Food Menu**:
   - **🍔 Gourmet Burgers**: Double Smash Bacon Cheddar, Nashville Hot Crispy Chicken, Truffle Swiss Mushroom, Spicy Volcano Jalapeño, Avocado Green Goddess.
   - **🍕 Detroit & Artisan Pizzas**: Pepperoni Overload Detroit Style, Smoky BBQ Pulled Chicken & Bacon, Classic Margherita Rustica.
   - **🍗 Crispy Fried Chicken & Wings**: Hand-breaded Mega Crunch Tenders, Korean Sweet Chili Glazed Wings, Buffalo Hot Wings.
   - **🌮 Tacos & Loaded Nachos**: Slow-cooked Birria Beef Tacos with Consommé dip, Cinema Loaded Stadium Nachos with warm Queso Blanco.
   - **🍟 Loaded Sides**: Loaded Bacon Cheddar Animal Fries, Truffle Parmesan Herb Fries, Stretchy Mozzarella Sticks.
   - **🥤 Drinks & Shakes**: Salted Caramel Pretzel Shake, Oreo Blast, Fountain Soda with Free Seat Refills.
   - **🍩 Sweet Treats**: Warm Cinnamon Churros with Dulce de Leche, Molten Lava Cake.
   - **🍱 Value Combos**: The Ultimate Seat Drop Combo, Movie Night Duo Feast, Game Day Wing Box.

5. **Deep Customization**:
   - Size selection (Regular, Hungry Mode).
   - Heat spice levels (Mild, Medium, Hot, Volcano/Inferno).
   - Add-on toppings (Extra bacon, free-range egg, truffle mayo, melted queso, jalapeños).
   - Special kitchen notes.

6. **Order Placement & Live Seat Tracking**:
   - Tip options, promo codes (`SEAT50` for 50% off, `FREEDROP`).
   - Payment options (Apple Pay / Google Pay, Credit Card, Seat Reservation Tab, Cash upon delivery).
   - Live 5-stage order tracker:
     1. Order Received
     2. Cooking & Grilling
     3. Quality Check & Packaging
     4. Runner En Route to Seat
     5. Delivered to Seat!
   - 4-Digit Handover PIN to ensure the runner hands the food to the correct seat occupant.
   - "Next Step" simulation button to fast-forward the order lifecycle.
   - Order history stored locally in `localStorage`.

---

## 💻 Running Locally

The site is served locally via Python:

```bash
# Inside /Users/abhay/.gemini/antigravity/scratch/seat_bites_web
python3 -m http.server 8088
```

Open your browser at:
👉 **`http://localhost:8088`**

### Test Instant NFC / QR Link:
```
http://localhost:8088/?room=Grand%20Auditorium%20A&row=Row%203&seat=Seat%2022&tag=nfc
```
