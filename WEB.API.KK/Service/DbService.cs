namespace WEB.API.KK.Service
{
    public class DbService : IDbService
    {
        List<UserInfo> _userInfo = new List<UserInfo>();
        public DbService() {
            UserInfo mockUser = new UserInfo
            {
                fullname = "JohnDoe",
                username = "johndoe",
                email = "johndoe@example.com",
                password = "P@ssw0rd123", // Example password with validation criteria
                confirmPassword = "P@ssw0rd123" // Confirm password matches
            };
            //List<UserInfo> _userInfo = new List<UserInfo>();
            _userInfo.Add(mockUser);
        }
        
        
        public bool Add(UserInfo userInfo)
        {
            _userInfo.Add(userInfo);
            return true;
        }

        public UserInfo get(string username)
        {
            return _userInfo.Find(x=> x.username.ToLower().Equals(username.ToLower(), StringComparison.OrdinalIgnoreCase));
        }
    }
}
