import { clerkClient } from '@clerk/clerk-sdk-node';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly logger = new Logger();

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const token = req.cookies.__session;

    // TESTING
    const masterToken = req.headers?.authorization?.substring(7);
    if (masterToken === process.env.MASTER_TOKEN) {
      const master = await clerkClient.verifyToken(masterToken);
      req['userId'] = master.sub;

      return true;
    }

    try {
      const foundToken = await clerkClient.verifyToken(token);
      req['userId'] = foundToken.sub;
    } catch (e) {
      console.log(e);
      this.logger.error(e);
      return false;
    }
    return true;
  }
}
