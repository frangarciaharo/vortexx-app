import { defineConfig } from 'astro/config';

export default defineConfig({
    vite: {
        server: {
            allowedHosts: ['2731-90-171-39-35.ngrok-free.app'], // <--- ngrok URL aquí
        },
    },
});