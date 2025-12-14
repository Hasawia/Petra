import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, key: "contact.info.phone", value: "+962 6 XXX XXXX" },
  { icon: Mail, key: "contact.info.email", value: "info@petra-oil.com" },
  { icon: MapPin, key: "contact.info.address", value: "Amman, Jordan" },
  { icon: Clock, key: "contact.info.hours", value: "Sun-Thu: 8AM-5PM" }
];

export const ContactSection = () => {
  const { t, dir } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.form.success'),
      description: t('contact.form.successDesc'),
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 bg-muted" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
          <div className="w-24 h-1 bg-royal-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder={t('contact.form.name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder={t('contact.form.email')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                    <Input
                      type="tel"
                      placeholder={t('contact.form.phone')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t('contact.form.message')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-petroleum-green hover:bg-petroleum-green/90 text-white"
                  >
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-petroleum-green/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-petroleum-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t(info.key)}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {info.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <Card className="border-border bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-petroleum-green/20 to-petroleum-green/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-petroleum-green mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">
                      {t('contact.map.placeholder')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
