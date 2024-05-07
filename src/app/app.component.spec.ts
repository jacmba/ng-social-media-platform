import { AppComponent } from "./app.component";

describe('AppComponent', () => {

  it('Should have a defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
    expect(component.title).toEqual('My Social Media Platform');
  });
});
