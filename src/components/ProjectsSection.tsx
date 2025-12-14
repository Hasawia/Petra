import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Award } from "lucide-react";

const stats = [
  { key: "projects.stats.years", value: "15+", icon: TrendingUp },
  { key: "projects.stats.clients", value: "200+", icon: Users },
  { key: "projects.stats.locations", value: "50+", icon: MapPin },
  { key: "projects.stats.certifications", value: "10+", icon: Award }
];

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
          <div className="w-24 h-1 bg-royal-gold mx-auto mt-6" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="text-center border-border hover:shadow-lg transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-petroleum-green/10 flex items-center justify-center mb-4">
                    <stat.icon className="w-7 h-7 text-petroleum-green" />
                  </div>
                  <div className="text-4xl font-bold text-royal-gold mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t(stat.key)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Cards Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 bg-card group">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-petroleum-green to-petroleum-green/80 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-50" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-royal-gold text-petroleum-green text-xs font-semibold rounded-full">
                        {t(`projects.project${index + 1}.tag`)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-petroleum-green transition-colors">
                      {t(`projects.project${index + 1}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`projects.project${index + 1}.desc`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
