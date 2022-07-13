describe('react-microsurveys: ReactMicrosurveys component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactmicrosurveys--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ReactMicrosurveys!');
  });
});
