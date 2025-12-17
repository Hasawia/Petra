import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const LocationMap = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="heading-card font-bold text-emdad-navy mb-6 text-center arabic-text flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6 text-emdad-gold" />
                {t("contact.location.title")}
              </h2>

              <iframe
                title={t("contact.map.title")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.194048980515!2d36.2567677!3d33.3813401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151921890b06c501%3A0x15b99d45ef042d28!2zQWxhYmlkIGZ1ZWwgc3RhdGlvbiDigJMg2YjZhiDYp9mE2YHZitmF2Kkg2KfZhNiz2LPYqSDYp9mE2YbZiiDZhNmE2KfZhA!5e0!3m2!1sar!2s!4v1721385104721!5m2!1sar!2s"
                className="w-full h-[350px] md:h-[450px] rounded-lg shadow-md border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="text-center mt-4">
                <a
                  href="https://www.google.com/maps/place/Alabid+fuel+station+%D9%83%D8%A7%D8%B2%D9%8A%D8%A9+%D8%A7%D9%84%D8%B9%D8%A7%D8%A8%D8%AF%E2%80%AD/@33.3883283,36.26063,16.5z/data=!4m6!3m5!1s0x151921890b06c501:0x15b99d45ef042d28!8m2!3d33.3813401!4d36.2567677!16s%2Fg%2F11h81j0w14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emdad-gold hover:text-yellow-500 text-base font-medium underline inline-flex items-center gap-1"
                >
                  <MapPin className="w-4 h-4" />
                  {t("contact.map.viewLarger")}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
