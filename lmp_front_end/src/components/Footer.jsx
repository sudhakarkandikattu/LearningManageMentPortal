import React from "react";
import styled from 'styled-components'

const ConatiningFooterStyles = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: #30496d;
    width: 100%;
    z-index: 999;
    margin-top: auto;
    
`

const FooterTopStyles = styled.div`
    padding: 0 1rem;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: 0 0;
    font-size: 100%;
    vertical-align: baseline;
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* padding-top: 55px;
    padding-bottom: 45px; */
    width: 100%;
    max-width: 960px;
    margin: 15px auto;
`
const FooterCol = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    > ul {
        list-style: none;
        font-size: 0.85rem;
    }
    > ul > li {
        line-height: 22px;
    }
    a, p{
         color: #fff;
         text-decoration: none;
    }
    > ul > li:first-child > a,
    > ul > li:first-child > p {
        font-size: 1rem !important;
        font-weight: bold !important;
    }
    > ul > li:first-child {
        margin-bottom: 5px;
    }
`

const CopyrightStyles = styled.div`
    padding: 20px 0;
    text-align: center;
    background: #30496d;
    > p{
        color: #fff !important;
        font-size: 0.6rem;
        margin-bottom: 0;
    }
    > p > a{
        color: #fff !important;
    }
`

function Footer() {
    return (
        <ConatiningFooterStyles id="main-footer">
            <FooterTopStyles id="footer-top">
                <FooterContainer>

                    <FooterCol class="fb-1 footer-col">
                        <ul id="menu-footer-menu-1-products" class="header-col menu-col"><li id="menu-item-67" class="li-header menu-item menu-item-type-custom menu-item-object-custom menu-item-67"><a href="#">Products</a></li>
                            <li id="menu-item-316" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-316"><a href="https://www.sureify.com/lifetime-acquire/">LifetimeACQUIRE</a></li>
                            <li id="menu-item-317" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-317"><a href="https://www.sureify.com/lifetime-service/">LifetimeSERVICE</a></li>
                            <li id="menu-item-318" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-318"><a href="https://www.sureify.com/lifetime-engage/">LifetimeENGAGE</a></li>
                        </ul>
                    </FooterCol>

                    <FooterCol class="fb-2 footer-col">
                        <ul id="menu-footer-menu-2-about-sureify" class="header-col menu-col"><li id="menu-item-319" class="li-header menu-item menu-item-type-post_type menu-item-object-page menu-item-319"><a href="https://www.sureify.com/about/">About Sureify</a></li>
                            <li id="menu-item-1253" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1253"><a href="https://www.sureify.com/about/">About Sureify</a></li>
                            <li id="menu-item-321" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-321"><a href="https://www.sureify.com/press/">Press</a></li>
                            <li id="menu-item-1254" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1254"><a href="https://www.sureify.com/events/">Events</a></li>
                            <li id="menu-item-322" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-322"><a href="https://www.sureify.com/careers/">Careers</a></li>
                            <li id="menu-item-494" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-494"><a href="https://www.sureify.com/about/#team">Team</a></li>
                        </ul>
                    </FooterCol>

                    <FooterCol class="fb-3 footer-col">
                        <ul id="menu-footer-menu-3-resources" class="header-col menu-col"><li id="menu-item-69" class="li-header menu-item menu-item-type-custom menu-item-object-custom menu-item-69"><a href="#">Resources</a></li>
                            <li id="menu-item-1255" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1255"><a href="https://www.sureify.com/resources/">Resources</a></li>
                            <li id="menu-item-1256" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1256"><a href="https://www.sureify.com/faq/">FAQ</a></li>
                        </ul>
                    </FooterCol>
                    <FooterCol class="fb-4 footer-col">
                        <ul id="menu-footer-menu-4-faq" class="header-col menu-col"><li id="menu-item-324" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-324"><a href="https://www.sureify.com/partners/">Partners/Ecosystem</a></li>
                            <li id="menu-item-1257" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1257"><a href="https://www.sureify.com/contact-us/">Contact</a></li>
                        </ul>
                    </FooterCol>

                    <FooterCol class="fb-5 footer-col">
                        <ul>
                            <li class="li-header"><p>Get Updates</p></li>
                        </ul>
                    </FooterCol>

                    {/* <div class="fb-6 footer-col social-col">
                        <ul class="et-social-icons">
                            <li class="et-social-icon et-social-twitter">
                                <a href="https://twitter.com/Sureify" target="_blank" class="icon">
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li class="et-social-icon et-social-linkedin">
                                <a href="https://www.linkedin.com/company/sureify-com" target="_blank" class="icon">
                                    <span>Linkedin</span>
                                </a>
                            </li>

                        </ul>
                    </div> */}

                </FooterContainer>
            </FooterTopStyles>

            <CopyrightStyles class="copyright">
                <p>Copyright ©2022 Sureify Labs, Inc. Various trademarks held by their respective owners. | <a href="https://www.sureify.com/privacy-policy/">Privacy Policy.</a> | <a href="https://www.sureify.com/terms-of-use/">Terms of Use.</a></p>
            </CopyrightStyles>
        </ConatiningFooterStyles>
    )
}

export default Footer;