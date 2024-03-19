import React from "react"
import styled from "styled-components"
import { DropdownSection, Heading } from "./Components"
import {ourvalue, ourstory, process, engagementmodel, confidentiality, blog} from "../../assets";

const ProductsDropdownEl = styled.div`
  width: 24rem;
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

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 0.6rem;
    margin-left: 2.7rem;
  }
  h3 {
    margin-right: 0.5rem;
    width: 3.2rem;
    display: block; 
  }
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a {
    color: var(--dark-grey);
  }
`

const ProductsSection = styled.ul`
  li {
    display: flex;
    align-items: center;
  }
`

const WorksWithStripe = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`

const ProductsDropdown = () => {
  return (
    <ProductsDropdownEl className="w-full">
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={ourstory}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Our Story</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={ourvalue}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Our Value</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={process}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Process</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={engagementmodel}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Engagement Model</Heading>
              </div>
            </Link>
          </li>
          <li>
            <Link className="flex flex-1 items-center" to='/'>
              <Logo color="white">
                <img
                    src={confidentiality}
                    alt="menu"
                    className="w-[20px] h-[20px] m-auto object-contain"
                />
              </Logo>
              <div>
                <Heading color="theme">Confidentiality</Heading>
              </div>
            </Link>
          </li>
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
        <Link className="flex flex-1 items-center mb-10" to='/'>
          <Logo color="transperant">
            <img
                src={blog}
                alt="menu"
                className="w-[20px] h-[20px] m-auto object-contain"
            />
          </Logo>
          <div>
            <Heading color="theme">Latest News</Heading>
          </div>
        </Link>
        <SubProductsList>
          <li>
            <div>
              <Link to='/'> &rsaquo; The best way to start an internet business.</Link>
            </div>
          </li>
          <li>
            <div><Link to='/'> &rsaquo; The best way to start an internet business.</Link></div>
          </li>
          <li>
            <div><Link to='/'> &rsaquo; The best way to start an internet business.</Link></div>
          </li>
        </SubProductsList>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default ProductsDropdown
