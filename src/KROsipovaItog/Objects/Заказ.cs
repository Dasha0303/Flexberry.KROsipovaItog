﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KROsipovaItog
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказ.
    /// </summary>
    // *** Start programmer edit section *** (Заказ CustomAttributes)

    // *** End programmer edit section *** (Заказ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказE", new string[] {
            "НомерЗаказа as \'Номер заказа\'",
            "Материал as \'Материал\'",
            "ФИОЗаказчика as \'Ф и о заказчика\'",
            "СпособДоставки as \'Способ доставки\'",
            "Колво as \'Колво\'",
            "АдресЗаказа as \'Адрес заказа\'"})]
    [View("ЗаказL", new string[] {
            "НомерЗаказа as \'Номер заказа\'",
            "Материал as \'Материал\'",
            "ФИОЗаказчика as \'Ф и о заказчика\'",
            "СпособДоставки as \'Способ доставки\'",
            "Колво as \'Колво\'",
            "АдресЗаказа as \'Адрес заказа\'"})]
    public class Заказ : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерЗаказа;
        
        private string fМатериал;
        
        private string fФИОЗаказчика;
        
        private string fСпособДоставки;
        
        private string fКолво;
        
        private string fАдресЗаказа;
        
        // *** Start programmer edit section *** (Заказ CustomMembers)

        // *** End programmer edit section *** (Заказ CustomMembers)

        
        /// <summary>
        /// АдресЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.АдресЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказ.АдресЗаказа CustomAttributes)
        [StrLen(255)]
        public virtual string АдресЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.АдресЗаказа Get start)

                // *** End programmer edit section *** (Заказ.АдресЗаказа Get start)
                string result = this.fАдресЗаказа;
                // *** Start programmer edit section *** (Заказ.АдресЗаказа Get end)

                // *** End programmer edit section *** (Заказ.АдресЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.АдресЗаказа Set start)

                // *** End programmer edit section *** (Заказ.АдресЗаказа Set start)
                this.fАдресЗаказа = value;
                // *** Start programmer edit section *** (Заказ.АдресЗаказа Set end)

                // *** End programmer edit section *** (Заказ.АдресЗаказа Set end)
            }
        }
        
        /// <summary>
        /// Колво.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Колво CustomAttributes)

        // *** End programmer edit section *** (Заказ.Колво CustomAttributes)
        [StrLen(255)]
        public virtual string Колво
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Колво Get start)

                // *** End programmer edit section *** (Заказ.Колво Get start)
                string result = this.fКолво;
                // *** Start programmer edit section *** (Заказ.Колво Get end)

                // *** End programmer edit section *** (Заказ.Колво Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Колво Set start)

                // *** End programmer edit section *** (Заказ.Колво Set start)
                this.fКолво = value;
                // *** Start programmer edit section *** (Заказ.Колво Set end)

                // *** End programmer edit section *** (Заказ.Колво Set end)
            }
        }
        
        /// <summary>
        /// Материал.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.Материал CustomAttributes)

        // *** End programmer edit section *** (Заказ.Материал CustomAttributes)
        [StrLen(255)]
        public virtual string Материал
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.Материал Get start)

                // *** End programmer edit section *** (Заказ.Материал Get start)
                string result = this.fМатериал;
                // *** Start programmer edit section *** (Заказ.Материал Get end)

                // *** End programmer edit section *** (Заказ.Материал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.Материал Set start)

                // *** End programmer edit section *** (Заказ.Материал Set start)
                this.fМатериал = value;
                // *** Start programmer edit section *** (Заказ.Материал Set end)

                // *** End programmer edit section *** (Заказ.Материал Set end)
            }
        }
        
        /// <summary>
        /// НомерЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказ.НомерЗаказа CustomAttributes)
        public virtual int НомерЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get start)
                int result = this.fНомерЗаказа;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Get end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set start)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set start)
                this.fНомерЗаказа = value;
                // *** Start programmer edit section *** (Заказ.НомерЗаказа Set end)

                // *** End programmer edit section *** (Заказ.НомерЗаказа Set end)
            }
        }
        
        /// <summary>
        /// СпособДоставки.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.СпособДоставки CustomAttributes)

        // *** End programmer edit section *** (Заказ.СпособДоставки CustomAttributes)
        [StrLen(255)]
        public virtual string СпособДоставки
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.СпособДоставки Get start)

                // *** End programmer edit section *** (Заказ.СпособДоставки Get start)
                string result = this.fСпособДоставки;
                // *** Start programmer edit section *** (Заказ.СпособДоставки Get end)

                // *** End programmer edit section *** (Заказ.СпособДоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.СпособДоставки Set start)

                // *** End programmer edit section *** (Заказ.СпособДоставки Set start)
                this.fСпособДоставки = value;
                // *** Start programmer edit section *** (Заказ.СпособДоставки Set end)

                // *** End programmer edit section *** (Заказ.СпособДоставки Set end)
            }
        }
        
        /// <summary>
        /// ФИОЗаказчика.
        /// </summary>
        // *** Start programmer edit section *** (Заказ.ФИОЗаказчика CustomAttributes)

        // *** End programmer edit section *** (Заказ.ФИОЗаказчика CustomAttributes)
        [StrLen(255)]
        public virtual string ФИОЗаказчика
        {
            get
            {
                // *** Start programmer edit section *** (Заказ.ФИОЗаказчика Get start)

                // *** End programmer edit section *** (Заказ.ФИОЗаказчика Get start)
                string result = this.fФИОЗаказчика;
                // *** Start programmer edit section *** (Заказ.ФИОЗаказчика Get end)

                // *** End programmer edit section *** (Заказ.ФИОЗаказчика Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказ.ФИОЗаказчика Set start)

                // *** End programmer edit section *** (Заказ.ФИОЗаказчика Set start)
                this.fФИОЗаказчика = value;
                // *** Start programmer edit section *** (Заказ.ФИОЗаказчика Set end)

                // *** End programmer edit section *** (Заказ.ФИОЗаказчика Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказE", typeof(IIS.KROsipovaItog.Заказ));
                }
            }
            
            /// <summary>
            /// "ЗаказL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказL", typeof(IIS.KROsipovaItog.Заказ));
                }
            }
        }
    }
}
