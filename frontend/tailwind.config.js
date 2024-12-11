/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "primary": "var(--primary)",
                "primary-hover": "var(--primary-hover)"
            },
            boxShadow: {
                table: "2px 2px 2px black, -2px -2px 2px black"
            }
        },
    },
    plugins: [],
}

