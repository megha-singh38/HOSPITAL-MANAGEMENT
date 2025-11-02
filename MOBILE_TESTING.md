# Testing on Mobile Devices

## Quick Start

1. **Start the development server with network access:**
   ```bash
   npm run dev
   ```

2. **Find your computer's IP address:**
   - **Windows:** Open PowerShell and run:
     ```powershell
     ipconfig
     ```
     Look for "IPv4 Address" under your active network adapter (usually starts with 192.168.x.x or 10.x.x.x)
   
   - **Mac/Linux:** Open terminal and run:
     ```bash
     ifconfig | grep "inet "
     ```
     Or use:
     ```bash
     hostname -I
     ```

3. **Access from your phone:**
   - Make sure your phone is on the same WiFi network as your computer
   - Open a browser on your phone
   - Navigate to: `http://YOUR_IP_ADDRESS:3000`
   - Example: `http://192.168.1.100:3000`

## Step-by-Step Instructions

### Step 1: Start the Dev Server

```bash
npm run dev
```

You should see output like:
```
Compiled successfully!

You can now view hospital-management-react in the browser.

  Local:            http://localhost:3000
  On Your Network: http://192.168.1.100:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### Step 2: Find Your Computer's IP Address

**Windows (PowerShell):**
```powershell
ipconfig | findstr IPv4
```

**Windows (Command Prompt):**
```cmd
ipconfig
```
Then look for "IPv4 Address" in the output.

**Mac/Linux:**
```bash
ipconfig getifaddr en0
```
Or for all interfaces:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### Step 3: Connect Your Phone

1. **Connect your phone to the same WiFi network** as your computer
2. **Open a mobile browser** (Chrome, Safari, Firefox, etc.)
3. **Type your IP address** in the address bar:
   - Format: `http://YOUR_IP:3000`
   - Example: `http://192.168.1.105:3000`

### Step 4: Test the App

The React app should load on your phone! You can now:
- Test all features
- Check mobile responsiveness
- Test touch interactions
- Verify all screens work correctly

## Troubleshooting

### Can't Access from Phone

1. **Check Firewall:**
   - Windows: Allow Node.js through Windows Firewall
   - Make sure port 3000 is not blocked

2. **Verify Same Network:**
   - Both devices must be on the same WiFi network
   - Your phone can't use mobile data while your computer is on WiFi

3. **Check IP Address:**
   - Make sure you're using the correct IP address
   - The IP might change if you reconnect to WiFi

4. **Try Different Browser:**
   - Sometimes browser security settings can block local network access

### Port Already in Use

If port 3000 is already in use, you can change it:
```bash
PORT=3001 npm run dev
```

Then access at `http://YOUR_IP:3001`

### Still Having Issues?

1. **Verify the server is running:**
   - Check the terminal for "Compiled successfully!" message
   - The server should show "On Your Network" URL

2. **Try accessing from your computer first:**
   - Open `http://localhost:3000` in your computer's browser
   - If this doesn't work, there's an issue with the server

3. **Check router settings:**
   - Some routers have AP isolation enabled which prevents devices from communicating
   - Disable AP isolation in router settings if enabled

## Alternative: Using ngrok (External Access)

If you need to test from outside your local network, you can use ngrok:

1. **Install ngrok:**
   ```bash
   npm install -g ngrok
   ```

2. **Start your dev server:**
   ```bash
   npm run dev
   ```

3. **In another terminal, run:**
   ```bash
   ngrok http 3000
   ```

4. **Use the ngrok URL** (e.g., `https://abc123.ngrok.io`) on your phone

**Note:** ngrok URLs are temporary and change each time you restart ngrok (unless you have a paid account).

## Mobile Testing Tips

1. **Enable Remote Debugging:**
   - **Chrome (Android):** Connect via USB and use Chrome DevTools
   - **Safari (iOS):** Enable Web Inspector in Settings > Safari > Advanced

2. **Test Different Screen Sizes:**
   - The app is responsive, test on different phone models if possible
   - Use browser DevTools mobile emulator for quick checks

3. **Performance Testing:**
   - Test on slower networks (use browser DevTools network throttling)
   - Check touch responsiveness and animations

4. **Test All Features:**
   - Navigate through all screens
   - Test form inputs
   - Check modals and dropdowns
   - Verify all buttons are touch-friendly

