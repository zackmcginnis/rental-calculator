import {Component, OnInit} from '@angular/core';
import {RouterModule, Router} from "@angular/router";

declare const FB:any;

@Component({
    moduleId: module.id,
    selector: 'facebook-login',
    templateUrl: './facebook.component.html'
})

export class FacebookLoginComponent implements OnInit {

    constructor() {
        FB.init({
            appId      : '1439967062733107',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
        FB.login();
        //this.getFriendsList();
    }

    statusChangeCallback(resp: any) {
        if (resp.status === 'connected') {
            var accessToken = resp.authResponse.accessToken;
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            
        }else {
            
        }
    };

    ngOnInit() {
        FB.getLoginStatus((response: any) => {
            this.statusChangeCallback(response);
        });
    }

    getFriendsList() {
         //make the API call 
        FB.api(
            "/me/taggable_friends",
            function (response: any) {
              if (response && !response.error) {
                //handle the result
                console.log(response);
              } else {
                  console.log("else", response.error);
              }
            }
        );

    }

}