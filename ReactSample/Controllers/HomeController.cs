using ReactSample.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;

namespace ReactSample.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
            //return RedirectToAction("AngularComments");
        }

        [OutputCache(Location = OutputCacheLocation.None)]
        public ActionResult Comments(int? count)
        {
            if (count == null) count = 100000;
            if (count > 50000) count = 100000;

            IList<CommentModel> _comments= new List<CommentModel>();
            Random r = new Random();
            int rInt = r.Next(0, 100); //for ints
            for (int i = 1; i <= count; i++)
            {
                _comments.Add(new CommentModel
                {
                    Id = i,
                    Name = "John Doe Number " + i,
                    Department =r.Next(1, 4)
                });
            }

            return new JsonResult()
            {
                Data = _comments,
                JsonRequestBehavior = JsonRequestBehavior.AllowGet,
                MaxJsonLength = Int32.MaxValue
            };
        }

        public ActionResult AngularComments()
        {
            return View();
        }

        public ActionResult FasterAngularComments()
        {
            return View();
        }
    }
}
