
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "../ui/use-toast";

const services = [
  { id: "haircut-women", name: "Dámský střih" },
  { id: "haircut-men", name: "Pánský střih" },
  { id: "coloring", name: "Barvení vlasů" },
  { id: "extension", name: "Prodlužování vlasů" },
  { id: "cosmetics", name: "Kosmetika" },
  { id: "manicure", name: "Manikúra" },
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", 
  "14:00", "15:00", "16:00", "17:00", "18:00"
];

export const HeroSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedService || !selectedTime) {
      toast({
        title: "Chyba",
        description: "Prosím vyplňte všechna pole",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Rezervace odeslána",
      description: `Děkujeme za vaši rezervaci na ${selectedService} dne ${selectedDate.toLocaleDateString()} v ${selectedTime}`,
    });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center p-4 relative pt-16">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight animate-fade-down">
          Kadeřnictví ZZsalon
        </h1>
        
        <div className="animate-fade-up">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/760e91c9-8500-4f79-9996-73e5a82db2e0.png"
              alt="Interiér salonu" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          Vytváříme jedinečné účesy, které podtrhnou vaši osobnost. Našim cílem je, abyste se u nás cítili skvěle a odcházeli s dokonalým vzhledem.
        </p>

        <div className="animate-fade-up [animation-delay:400ms]">
          <Link to="/o-nas">
            <Button variant="outline" size="lg">
              O nás
            </Button>
          </Link>
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg animate-fade-up [animation-delay:600ms]">
          <h2 className="text-2xl font-semibold mb-6">Rezervace termínu</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Select
                  value={selectedService}
                  onValueChange={setSelectedService}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Vyberte službu" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border bg-white"
                  disabled={(date) => 
                    date < new Date() || // Nelze vybrat minulé dny
                    date.getDay() === 0 || // Neděle
                    date.getDay() === 6 // Sobota
                  }
                />
              </div>

              <div>
                <Select
                  value={selectedTime}
                  onValueChange={setSelectedTime}
                  disabled={!selectedDate}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Vyberte čas" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Rezervovat termín
            </Button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};
