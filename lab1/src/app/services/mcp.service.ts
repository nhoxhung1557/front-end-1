import { Injectable } from '@angular/core';
import { MCPProtocol } from '../protocols/mcp.protocol';

@Injectable({
  providedIn: 'root'
})
export class MCPService {
  private protocol: MCPProtocol = {
    context: 'product-management',
    model: 'product',
    version: '1.0',
    actions: ['create', 'read', 'update', 'delete']
  };

  constructor() { }

  executeAction(action: string, data?: any) {
    if (this.protocol.actions.includes(action)) {
      console.log(`Executing ${action} with data:`, data);
      // Implement your MCP logic here
      return true;
    }
    return false;
  }

  setContext(context: string) {
    this.protocol.context = context;
  }

  getProtocol(): MCPProtocol {
    return this.protocol;
  }
}