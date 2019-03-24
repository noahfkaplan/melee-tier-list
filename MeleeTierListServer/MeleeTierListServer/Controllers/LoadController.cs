using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MeleeTierListServer.Controllers
{
    [Route("api/[controller]")]
    public class LoadController : Controller
    {
        // GET api/values/5
        [HttpGet("{TierListId}")]
        public HttpResponseMessage Get(string id)
        {
            //Guid tableID = new Guid(id);
            Guid tableID = new Guid("90B0E383-FE33-404C-8968-426570C87945");
            string connectionString = "Server=WINDOWS-4F0KJMT;Database=MeleeTierListQA;Integrated Security=true;";
            string query = ($"SELECT RowNumber, CharacterList FROM dbo.TierListRows WHERE TierListID = '{tableID}'");
            string characterList = "";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                try
                {
                    while (reader.Read())
                    {
                        string temp = String.Format("{0}, {1}\n",
                            reader[0], reader[1]);
                        characterList += temp;
                    }
                }
                finally
                {
                    // Always call Close when done reading.
                    reader.Close();
                }
            }
            var response = new HttpResponseMessage();
            response.Content = new StringContent(characterList);
            return response;
        }
    }
}
