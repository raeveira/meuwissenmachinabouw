'use client'

import {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'
import { authenticate } from '../actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {checkLoginStatus} from "@/app/actions/checkLoginStatus";
import {toast} from "sonner";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const checkSession = async () => {
            const data = await checkLoginStatus()
            if (data.isLoggedIn) {
                router.push('/')
            }
        }

        checkSession().then(() => setIsLoading(false))
    }, [router]);

    async function onSubmit(formData: FormData) {
        setError('')

        try {
            const result = await authenticate(formData)
            if (result.success) {
                toast.success('Logged in successfully');
                router.push('/')
            } else {
                setError(result.error || 'Authentication failed')
            }
        } catch (err) {
            setError('An unexpected error occurred')
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#FFD700] rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-[400px] space-y-8">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="w-[22rem] h-20 relative">
                        <Image
                            src="/front-page/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur">
                    <CardHeader>
                        <h1 className="text-2xl font-bold text-center text-[#FFD700]">
                            Welcome Back
                        </h1>
                    </CardHeader>
                    <CardContent>
                        <form action={onSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <div className="relative">
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Enter password"
                                        required
                                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white hover:bg-transparent"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                        <span className="sr-only">
                      {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                                    </Button>
                                </div>
                                {error && (
                                    <p className="text-sm text-red-500">{error}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90 disabled:opacity-50"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

