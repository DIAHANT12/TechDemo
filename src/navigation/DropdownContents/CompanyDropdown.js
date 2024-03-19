import React from "react"
import styled from "styled-components"
import {
  Heading,
  DropdownSection
} from "./Components"
import {
  bank,
  ecommercei,
  education,
  healthcare, hotel, logistic,
  social, travel
} from "../../assets";
import { Link } from "react-router-dom";

const CompanyDropdownEl = styled.div`
  width: 18.5rem;
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


const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={healthcare}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Healthcare</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={education}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Education</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={ecommercei}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">eCommerce</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={hotel}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Hotel & Industries</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={travel}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Travel & Tourism</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={bank}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Banking & Finance</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/logistic-software-development'>
              <Logo color="white">
                <img
                    src={logistic}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Logistic & Shipping</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={social}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Social Networking</Heading>
              </div>
            </Link>
          </li>
        </ProductsSection>
      </DropdownSection>
      {/*<DropdownSection>*/}
      {/*  <Link className="flex flex-1 items-center mb-10" to='/'>*/}
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
      {/*        <Link to='/'> &rsaquo; The best way to start an internet business.</Link>*/}
      {/*      </div>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <div><Link to='/'> &rsaquo; The best way to start an internet business.</Link></div>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <div><Link to='/'> &rsaquo; The best way to start an internet business.</Link></div>*/}
      {/*    </li>*/}
      {/*  </SubProductsList>*/}
      {/*</DropdownSection>*/}
    </CompanyDropdownEl>
  )
}

export default CompanyDropdown
