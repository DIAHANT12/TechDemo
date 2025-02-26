import React from "react"
import styled from "styled-components"
import {
  Heading,
  DropdownSection
} from "./Components"
import {
  android, angularjs, flutter, fsapp, ios, nodejs, reactjs,
} from "../../assets";
import { Link } from "react-router-dom";

const CompanyDropdownEl = styled.div`
  width: 20rem;
`

const Logo = styled.div`
  width: 34px;
  height: 34px;
  margin-right: 10px;
  border-radius: 100%;
  opacity: 0.8;
  display: flex;
  background-color: ${({ color }) => `var(--${color})`};
`


const ProductsSection = styled.ul`
  li {
    display: flex;
    align-items: center;
  }
`


const HireDedicatedDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <Link className="flex flex-1 items-center" to='/ios-process-ex'>
              <Logo color="white">
                <img
                    src={ios}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme"> Hire iOS Developer </Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/hire-dev'>
              <Logo color="white">
                <img
                    src={android}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme"> Hire Android Developer </Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/flutter-ex'>
              <Logo color="white">
                <img
                    src={flutter}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme"> Hire Flutter Developer </Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/hire-dev'>
              <Logo color="white">
                <img
                    src={fsapp}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme"> Hire Full Stack Developer </Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/hire-dev'>
              <Logo color="white">
                <img
                    src={angularjs}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme"> Hire Angular Developer </Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/hire-dev'>
              <Logo color="white">
                <img
                    src={reactjs}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme"> Hire ReactJS Developer </Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/hire-dev'>
              <Logo color="white">
                <img
                    src={nodejs}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme"> Hire NodeJS Developer </Heading>
              </div>
            </Link>
          </li>
        </ProductsSection>
      </DropdownSection>
      {/*<DropdownSection>*/}
      {/*  <Link className="flex flex-1 items-center mb-10" to='/hire-dev'>*/}
      {/*    <Logo color="transperant">*/}
      {/*      <img*/}
      {/*          src={blog}*/}
      {/*          alt="menu"*/}
      {/*          className="w-[20px] h-[20px] m-auto object-contain"*/}
      {/*      />*/}
      {/*    </Logo>*/}
      {/*    <div>*/}
      {/*      <Heading color="theme">Latest News</Heading>*/}
      {/*    </div>*/}
      {/*  </Link>*/}
      {/*  <SubProductsList>*/}
      {/*    <li>*/}
      {/*      <div>*/}
      {/*        <Link to='/hire-dev'> &rsaquo; The best way to start an internet business.</Link>*/}
      {/*      </div>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <div><Link to='/hire-dev'> &rsaquo; The best way to start an internet business.</Link></div>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <div><Link to='/hire-dev'> &rsaquo; The best way to start an internet business.</Link></div>*/}
      {/*    </li>*/}
      {/*  </SubProductsList>*/}
      {/*</DropdownSection>*/}
    </CompanyDropdownEl>
  )
}

export default HireDedicatedDropdown
