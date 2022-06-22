import { JwtPayload } from '@/auth/passport/strategy/types/jwt.payload.type';

export type JwtPayloadWithRt = JwtPayload & { refreshToken: string };
