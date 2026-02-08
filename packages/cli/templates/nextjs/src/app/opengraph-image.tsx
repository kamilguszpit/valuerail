import { ImageResponse } from 'next/og'
import { siteConfig } from '../lib/config'

export const runtime = 'edge'

export const alt = 'ValueRail App'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    const { title, description } = siteConfig.metadata

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'monospace',
                    border: '20px solid #222',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    {/* Mock Terminal Window */}
                    <div
                        style={{
                            display: 'flex',
                            background: '#111',
                            border: '1px solid #333',
                            borderRadius: '12px',
                            padding: '40px 80px',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 60,
                                fontWeight: 'bold',
                                background: 'linear-gradient(to right, #FF5F6D, #FFC371)',
                                backgroundClip: 'text',
                                color: 'transparent',
                                marginBottom: 20,
                            }}
                        >
                            {title}
                        </div>
                        <div
                            style={{
                                fontSize: 30,
                                color: '#666',
                                textAlign: 'center',
                            }}
                        >
                            {description}
                        </div>
                        <div
                            style={{
                                marginTop: 40,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                background: '#222',
                                padding: '10px 20px',
                                borderRadius: '8px',
                                border: '1px solid #333',
                            }}
                        >
                            <div style={{ color: '#CD6052' }}>$</div>
                            <div style={{ color: '#ededed' }}>npm install @valuerail/cli</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
