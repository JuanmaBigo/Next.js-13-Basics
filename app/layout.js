import { Navigation } from "../components/Navigation";
import '../styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Next.js App</title>
            </head>
            <body>
            <Navigation />
                {children}
            </body>
        </html>
    )
}