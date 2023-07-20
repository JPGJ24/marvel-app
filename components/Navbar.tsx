// components/NavBar.tsx
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.li`
  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover {
      color: #ddd;
    }
  }
`;

const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink>
          <a href="/">Home</a>
        </NavLink>
        <NavLink>
          <a href="/personajes">Personajes</a>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default NavBar;
