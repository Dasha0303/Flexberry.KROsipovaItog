﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KROsipovaItog1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Акт приемки.
    /// </summary>
    // *** Start programmer edit section *** (АктПриемки CustomAttributes)

    // *** End programmer edit section *** (АктПриемки CustomAttributes)
    [AutoAltered()]
    [Caption("Акт приемки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("АктПриемкиE", new string[0])]
    [View("АктПриемкиL", new string[0])]
    public class АктПриемки : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерАкта;
        
        private string fДатаПриемки = "Now";
        
        private IIS.KROsipovaItog1.ТН fТН;
        
        private IIS.KROsipovaItog1.ТЧАктаПриемки fТЧАктаПриемки;
        
        private IIS.KROsipovaItog1.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (АктПриемки CustomMembers)

        // *** End programmer edit section *** (АктПриемки CustomMembers)

        
        /// <summary>
        /// ДатаПриемки.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.ДатаПриемки CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.ДатаПриемки CustomAttributes)
        [StrLen(255)]
        public virtual string ДатаПриемки
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.ДатаПриемки Get start)

                // *** End programmer edit section *** (АктПриемки.ДатаПриемки Get start)
                string result = this.fДатаПриемки;
                // *** Start programmer edit section *** (АктПриемки.ДатаПриемки Get end)

                // *** End programmer edit section *** (АктПриемки.ДатаПриемки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.ДатаПриемки Set start)

                // *** End programmer edit section *** (АктПриемки.ДатаПриемки Set start)
                this.fДатаПриемки = value;
                // *** Start programmer edit section *** (АктПриемки.ДатаПриемки Set end)

                // *** End programmer edit section *** (АктПриемки.ДатаПриемки Set end)
            }
        }
        
        /// <summary>
        /// НомерАкта.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.НомерАкта CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.НомерАкта CustomAttributes)
        public virtual int НомерАкта
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.НомерАкта Get start)

                // *** End programmer edit section *** (АктПриемки.НомерАкта Get start)
                int result = this.fНомерАкта;
                // *** Start programmer edit section *** (АктПриемки.НомерАкта Get end)

                // *** End programmer edit section *** (АктПриемки.НомерАкта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.НомерАкта Set start)

                // *** End programmer edit section *** (АктПриемки.НомерАкта Set start)
                this.fНомерАкта = value;
                // *** Start programmer edit section *** (АктПриемки.НомерАкта Set end)

                // *** End programmer edit section *** (АктПриемки.НомерАкта Set end)
            }
        }
        
        /// <summary>
        /// Акт приемки.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.KROsipovaItog1.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.Сотрудники Get start)

                // *** End programmer edit section *** (АктПриемки.Сотрудники Get start)
                IIS.KROsipovaItog1.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (АктПриемки.Сотрудники Get end)

                // *** End programmer edit section *** (АктПриемки.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.Сотрудники Set start)

                // *** End programmer edit section *** (АктПриемки.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (АктПриемки.Сотрудники Set end)

                // *** End programmer edit section *** (АктПриемки.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Акт приемки.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.ТН CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.ТН CustomAttributes)
        [PropertyStorage(new string[] {
                "ТН"})]
        [NotNull()]
        public virtual IIS.KROsipovaItog1.ТН ТН
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.ТН Get start)

                // *** End programmer edit section *** (АктПриемки.ТН Get start)
                IIS.KROsipovaItog1.ТН result = this.fТН;
                // *** Start programmer edit section *** (АктПриемки.ТН Get end)

                // *** End programmer edit section *** (АктПриемки.ТН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.ТН Set start)

                // *** End programmer edit section *** (АктПриемки.ТН Set start)
                this.fТН = value;
                // *** Start programmer edit section *** (АктПриемки.ТН Set end)

                // *** End programmer edit section *** (АктПриемки.ТН Set end)
            }
        }
        
        /// <summary>
        /// Акт приемки.
        /// </summary>
        // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки CustomAttributes)

        // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки CustomAttributes)
        [PropertyStorage(new string[] {
                "ТЧАктаПриемки"})]
        [NotNull()]
        public virtual IIS.KROsipovaItog1.ТЧАктаПриемки ТЧАктаПриемки
        {
            get
            {
                // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки Get start)

                // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки Get start)
                IIS.KROsipovaItog1.ТЧАктаПриемки result = this.fТЧАктаПриемки;
                // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки Get end)

                // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки Set start)

                // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки Set start)
                this.fТЧАктаПриемки = value;
                // *** Start programmer edit section *** (АктПриемки.ТЧАктаПриемки Set end)

                // *** End programmer edit section *** (АктПриемки.ТЧАктаПриемки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "АктПриемкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АктПриемкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АктПриемкиE", typeof(IIS.KROsipovaItog1.АктПриемки));
                }
            }
            
            /// <summary>
            /// "АктПриемкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АктПриемкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АктПриемкиL", typeof(IIS.KROsipovaItog1.АктПриемки));
                }
            }
        }
    }
}
