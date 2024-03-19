import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} border-t-[1px] border-t-[#3F3E45] pt-10 md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src="https://cvws.icloud-content.com/B/AS7HMbdF2GbQd2Q2UdjvkSraXMwKAZro1ZgrkguOc2IQ5OvcNlHeZJwJ/171076656381808290.png?o=Ao7QHiuofmJL3U8cGcrSvSPJ9XpdwqqRqdfw6JLxTrfe&v=1&x=3&a=CAogaUo1qfSAwdB_hP4we662UBDzsxP2SA4LGGwwxdV6JMsSbxD0sZCN5TEY9I7sjuUxIgEAUgTaXMwKWgTeZJwJaifd9ZEGuXDSj9CokQoBSLnV3lqA-VulCVMOp4j6qr1ZnRVSQbNnswhyJ1-tcVvDjjwf5vWJcBZ7BTabxm1Iklttm1VV_2dYFXUgZyZ4kv1AGQ&e=1710770292&fl=&r=5c10db8a-113b-4ca5-9cd1-fcff8daaad22-1&k=F0yEStTILCThPgAEVVI_ig&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=116&s=NjjsgUPbxnWIItdl36KmSk7w9iw&cd=i"
          alt="GoWithTech"
          className="w-[120px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink, index) => (
          <div
            key={index}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>

            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                    ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}
                  `}
                >
                  <Link to={link.link} className="hover:text-secondary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright &copy; {new Date().getFullYear()} <a href="https://gowith.tech">GoWithTech</a>. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={index}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer 
              ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}
            `}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
