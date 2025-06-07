using Microsoft.AspNetCore.Mvc;
using WEB.API.KK.Service;

namespace WEB.API.KK.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;
        private readonly IDbService _dbService;
        public UserController(ILogger<UserController> logger, IDbService dbService)
        {
            _logger = logger;
            _dbService = dbService;
        }

        [HttpGet(Name = "GetUser")]
        public UserInfo Get([FromQuery]string username)
        {
            return _dbService.get(username);
        }
        [HttpPost(Name = "AddUser")]
        public bool Post([FromBody] UserInfo user)
        {
            return _dbService.Add(user);
        }
    }
}
