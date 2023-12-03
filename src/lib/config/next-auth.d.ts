import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            userId: number
            name: string
            roleId: number
            username: "admin" | "user"
            avatarUrl: string | null
            candy: number
            description: string | null
            email: string
            rank: number
            createdAt: Date
            updatedAt: Date
        };

        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            userId: number
            name: string
            roleId: number
            username: "admin" | "user"
            avatarUrl: string | null
            candy: number
            description: string | null
            email: string
            rank: number
            createdAt: Date
            updatedAt: Date
        };

        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}
