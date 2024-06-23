import { clerkClient } from '@clerk/clerk-sdk-node';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly logger = new Logger();

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const token = req.cookies.__session;

    try {
      if (!token) {
        return false;
      }

      await clerkClient.verifyToken(token);
    } catch (e) {
      console.log(e);
      this.logger.error(e);
      return false;
    }
    console.log('verified');
    return true;
  }
}
