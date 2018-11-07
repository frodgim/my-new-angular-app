using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace my_new_angular_app.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {


         private static List<Hero> _heroes = new List<Hero>(){
            new Hero (){ Id =  12, Name =  "Mr. Nice"},
            new Hero (){ Id =  25, Name =  "Narco" },
            new Hero (){ Id =  13, Name =  "Bombasto" },
            new Hero (){ Id =  14, Name =  "Celeritas" },
            new Hero (){ Id =  15, Name =  "Magneta" },
            new Hero (){ Id =  16, Name =  "RubberMan" },
            new Hero (){ Id =  17, Name =  "Dynama" },
            new Hero (){ Id =  18, Name =  "Dr IQ" },
            new Hero (){ Id =  19, Name =  "Magma" },
            new Hero (){ Id =  20, Name =  "Tornado" }
         };

        [HttpGet("[action]")]
        public IEnumerable<Hero> GetHeroes()
        {
            return _heroes.OrderBy(x => x.Id);
        }

        [HttpGet("[action]")]
        public Hero GetHero(int id)
        {
            return _heroes.FirstOrDefault(x => x.Id == id);
        }

        // [HttpPost("[action]")]
        // public bool NewHero(Hero hero){
        //     _heroes.Add(hero);
        //     return true;
        // }

        [HttpPost("[action]")]
        public bool SaveHero([FromBody]Hero hero){
            var heroInList = _heroes.FirstOrDefault( x => x.Id == hero.Id) ;
            if(heroInList == null)
            {
                var newId = _heroes.Max(x => x.Id) + 1;
                hero.Id = newId;
                _heroes.Add(hero);
            }
            else {
                heroInList.Name = hero.Name;
            }
            

            return true;
        }
    }

    public class Hero
        {
            // [JsonProperty(PropertyName = "id")]
            public int Id { get; set; }
  
            // [JsonProperty(PropertyName = "name")]
            public string Name { get; set; }
        }
}
