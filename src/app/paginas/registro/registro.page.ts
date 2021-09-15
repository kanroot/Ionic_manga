import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  @ViewChild('avatarId')
  avatarId: IonSlides;
  usuario ={
    nick:'',
    avatar: 0,
    email:'',
    password:'',
    password2:''
  };

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pager:true,
    scrollbar:true
  };

  constructor() {}

  ngOnInit() {
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

  async seleccionarAvatar(){
    this.usuario.avatar =  await this.avatarId.getActiveIndex();
  }

}
