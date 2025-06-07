namespace WEB.API.KK.Service
{
    public interface IDbService
    {
        public bool Add(UserInfo userInfo);
        public UserInfo get(string username);
    }
}
