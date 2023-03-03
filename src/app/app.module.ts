import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'ng-sidebar';


// Icons

import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

// Components

import { HomePageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchComponent } from './components/search/search.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { DetailpageheaderComponent } from './components/detailpageheader/detailpageheader.component';
import { ProjectdetailpageComponent } from './pages/projectdetailpage/projectdetailpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjecttemplatesComponent } from './components/projecttemplate/projecttemplate.component';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';
import { DetailsformComponent } from './components/detailsform/detailsform.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExplorepageComponent } from './pages/explorepage/explorepage.component';
import { FiltermodalComponent } from './components/filtermodal/filtermodal.component';
import { LocationmodalComponent } from './components/locationmodal/locationmodal.component';
import { WhatsAppmodalComponent } from './components/whatsappmodal/whatsappmodal.component';
import { ContactmodalComponent } from './components/contactmodal/contactmodal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    BannerComponent,
    SearchComponent,
    ShowcaseComponent,
    FooterComponent,
    ProjectdetailpageComponent,
    DetailpageheaderComponent,
    ProjecttemplatesComponent,
    ProjectdetailsComponent,
    DetailsformComponent,
    SidebarComponent,
    ExplorepageComponent,
    FiltermodalComponent,
    LocationmodalComponent,
    WhatsAppmodalComponent,
    ContactmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    FontAwesomeModule,
    SwiperModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronDown, faLocationArrow, faHome, faRupeeSign, faLongArrowAltRight, farHeart, faWhatsapp, faArrowLeft, faMapMarkerAlt, faPhoneAlt, faEllipsisV, faBuilding, faBath, faUserCircle, faEye, faHeadphonesAlt, faCrosshairs, faTimes, faFacebook, faLinkedin, faTwitter, faInstagram);
  }
}