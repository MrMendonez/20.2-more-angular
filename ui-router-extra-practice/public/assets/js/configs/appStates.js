NucleusGlobalApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'assets/views/home.html'
      })

      .state('home.locations', {
        url: '/locations',
        templateUrl: 'assets/views/home-locations.html',
        controller: 'HomeController'
      })

      .state('home.aboutus', {
        url: '/aboutus',
        templateUrl: 'assets/views/home-aboutus.html'
      })

      .state('articulate-science', {
        url: '/articulate-science',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/articulate-science.html'
          },
          'columnOne@articulate-science': {
            templateUrl: 'assets/views/agencies/articulate-science-column-one.html'
          },
          'columnTwo@articulate-science': {
            templateUrl: 'assets/views/agencies/articulate-science-column-two.html',
            controller: 'ArticulateScienceController'
          }
        }
      })

      .state('chrysalis', {
        url: '/chrysalis/:name',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/chrysalis.html'
          },
          'columnOne@chrysalis': {
            templateUrl: 'assets/views/agencies/chrysalis-column-one.html',
            controller: 'ChrysalisController'
          },
          'columnTwo@chrysalis': {
            templateUrl: 'assets/views/agencies/chrysalis-column-two.html',
            controller: 'ChrysalisController'
          }
        }
      })

      .state('clinical-thinking', {
        url: '/clinical-thinking',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/clinical-thinking.html'
          },
          'columnOne@clinical-thinking': {
            templateUrl: 'assets/views/agencies/clinical-thinking-column-one.html',
          },
          'columnTwo@clinical-thinking': {
            templateUrl: 'assets/views/agencies/clinical-thinking-column-two.html',
          }
        }
      })

      .state('cognito-medical', {
        url: '/cognito-medical',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/cognito-medical.html'
          },
          'columnOne@cognito-medical': {
            templateUrl: 'assets/views/agencies/cognito-medical-column-one.html'
          },
          'columnTwo@cognito-medical': {
            templateUrl: 'assets/views/agencies/cognito-medical-column-two.html'
          }
        }

      })

      .state('health-interactions', {
        url: '/health-interactions',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/health-interactions.html'
          },
          'columnOne@health-interactions': {
            templateUrl: 'assets/views/agencies/health-interactions-column-one.html'
          },
          'columnTwo@health-interactions': {
            templateUrl: 'assets/views/agencies/health-interactions-column-two.html'
          }
        }
      })

      .state('imne', {
        url: '/imne',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/imne.html'
          },
          'columnOne@imne': {
            templateUrl: 'assets/views/agencies/imne-column-one.html'
          },
          'columnTwo@imne': {
            templateUrl: 'assets/views/agencies/imne-column-two.html'
          }
        }

      })

      .state('integress', {
        url: '/integress',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/integress.html'
          },
          'columnOne@integress': {
            templateUrl: 'assets/views/agencies/integress-column-one.html'
          },
          'columnTwo@integress': {
            templateUrl: 'assets/views/agencies/integress-column-two.html'
          }
        }
      })

      .state('international-medical-press', {
        url: '/international-medical-press',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/international-medical-press.html'
          },
          'columnOne@international-medical-press': {
            templateUrl: 'assets/views/agencies/international-medical-press-column-one.html'
          },
          'columnTwo@international-medical-press': {
            templateUrl: 'assets/views/agencies/international-medical-press-column-two.html'
          }
        }
      })

      .state('medical-expressions', {
        url: '/medical-expressions',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/medical-expressions.html'
          },
          'columnOne@medical-expressions': {
            templateUrl: 'assets/views/agencies/medical-expressions-column-one.html'
          },
          'columnTwo@medical-expressions': {
            templateUrl: 'assets/views/agencies/medical-expressions-column-two.html'
          }
        }
      })

      .state('meditech-media', {
        url: '/meditech-media',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/meditech-media.html'
          },
          'columnOne@meditech-media': {
            templateUrl: 'assets/views/agencies/meditech-media-column-one.html'
          },
          'columnTwo@meditech-media': {
            templateUrl: 'assets/views/agencies/meditech-media-column-two.html'
          }
        }
      })

      .state('nucleus-central', {
        url: '/nucleus-central',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/nucleus-central.html'
          },
          'columnOne@nucleus-central': {
            templateUrl: 'assets/views/agencies/nucleus-central-column-one.html'
          },
          'columnTwo@nucleus-central': {
            templateUrl: 'assets/views/agencies/nucleus-central-column-two.html'
          }
        }
      })

      .state('nucleus-digital', {
        url: '/nucleus-digital',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/nucleus-digital.html'
          },
          'columnOne@nucleus-digital': {
            templateUrl: 'assets/views/agencies/nucleus-digital-column-one.html'
          },
          'columnTwo@nucleus-digital': {
            templateUrl: 'assets/views/agencies/nucleus-digital-column-two.html'
          }
        }
      })

      .state('nucleus-x', {
        url: '/nucleus-x',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/nucleus-x.html'
          },
          'columnOne@nucleus-x': {
            templateUrl: 'assets/views/agencies/nucleus-x-column-one.html'
          },
          'columnTwo@nucleus-x': {
            templateUrl: 'assets/views/agencies/nucleus-x-column-two.html'
          }
        }
      })

      .state('scientific-pathways', {
        url: '/scientific-pathways',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/scientific-pathways.html'
          },
          'columnOne@scientific-pathways': {
            templateUrl: 'assets/views/agencies/scientific-pathways-column-one.html'
          },
          'columnTwo@scientific-pathways': {
            templateUrl: 'assets/views/agencies/scientific-pathways-column-two.html'
          }
        }
      })

      .state('scimentum', {
        url: '/scimentum',
        views: {
          '': {
            templateUrl: 'assets/views/agencies/scimentum.html'
          },
          'columnOne@scimentum': {
            templateUrl: 'assets/views/agencies/scimentum-column-one.html'
          },
          'columnTwo@scimentum': {
            templateUrl: 'assets/views/agencies/scimentum-column-two.html'
          }
        }
      })

      $locationProvider.html5Mode(true);

  }]);
