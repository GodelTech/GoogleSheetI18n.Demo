import React, { useState, useCallback } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'components/NavMenu.css';
import { LanguageDetector } from 'components/LanguageDetector';
import { useAuth } from 'hooks/useAuth';
import { accountService } from 'services/accountService';


export function NavMenu () {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { authState, authDispatchLogin, authDispatchLogout, authDispatchLoad } = useAuth();
  const toggleNavbar = useCallback(() => setIsCollapsed(value => !value), [setIsCollapsed]);

  const login = useCallback(() => {
    accountService.login()
      .then(res => res.json())
      .then(
        (result) => {
          authDispatchLogin(result);
        },
        (error) => {
          authDispatchLoad(false);
        }
      );
    authDispatchLoad(true);
  }, [authDispatchLoad, authDispatchLogin]);

  const logout = useCallback(() => {
    accountService.logout()
      .then(
        (result) => {
          authDispatchLogout(authState.token);
        },
        (error) => {
          authDispatchLoad(false);
        }
      );
    authDispatchLoad(true);
  }, [authState, authDispatchLogout, authDispatchLoad]);

  return (
    <header>
      <Navbar className="navbar-expand-sm border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">GoogleSheetI18n.Api.SimpleWebApi</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!isCollapsed} navbar>
            <LanguageDetector />
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">{t('global:navbar.home')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/introduction">{t('global:navbar.get-started')}</NavLink>
              </NavItem>
              {authState.isAuthenticated && <NavItem>
                <NavLink tag={Link} className="text-dark" to="/administration">{t('global:navbar.administration')}</NavLink>
              </NavItem>}
              <NavItem>
                {!authState.isAuthenticated && <button className="text-dark btn btn-outline-secondary nav-link mr-2" onClick={login}>{t('global:navbar.login')}</button>}
                {authState.isAuthenticated && <button className="text-dark btn btn-outline-secondary nav-link mr-2" onClick={logout}>{t('global:navbar.logout')}</button>}
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
