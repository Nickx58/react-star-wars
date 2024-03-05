import { routesConfig } from "../routes";

describe('routes', () => {
  it('should have correct routes object', () => {
    const routes: string[] = [];
    routesConfig[0].children?.forEach((route) => routes.push(String(route.path)));

    expect(routes.includes('/')).toBe(true);
    expect(routes.includes('/people')).toBe(true);
    expect(routes.includes('/planets')).toBe(true);
    expect(routes.includes('/people/:id')).toBe(true);
    expect(routes.includes('/planets/:id')).toBe(true);
  });
});
