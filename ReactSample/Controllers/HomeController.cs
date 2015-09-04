﻿using ReactSample.Models;
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
        }

        [OutputCache(Location = OutputCacheLocation.None)]
        public ActionResult Comments()
        {
            IList<CommentModel> _comments= new List<CommentModel>();
            for (int i = 0; i <= 15000; i++)
            {
                _comments.Add(new CommentModel
                {
                    Author = "Daniel Lo Nigro",
                    Text = "Hello ReactJS.NET World!"
                });
            }
            return Json(_comments, JsonRequestBehavior.AllowGet);
        }

    }
}
