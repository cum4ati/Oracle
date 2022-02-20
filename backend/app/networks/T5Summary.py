import logging

from transformers import pipeline
from summarizer import Summarizer, summarize
InputText = OutputText = str


class T5Summary:
    def __init__(self):
        print("Loading T5Summary")
        self.pipeline = pipeline("summarization", model="t5-base", tokenizer="t5-base", framework="tf")

    def summarize(self, text: InputText, min_length: int = 25, max_length: int = 100) -> OutputText:
        return self.pipeline(text, min_length=min_length, max_length=max_length)


if __name__ == '__main__':
    text = """Solar Light by Night Most people living in towns consider it a usual thing that streets are lit at 
    night. But street lights need a power supply (источник энергии) therefore distant areas with no source of 
    electricity remain in darkness until the sun comes up again. With new appliances now offered by several British 
    firms, many distant places could be lit with solar-powered street lights. It may seem strange that the lamps can 
    use the power of the sun which shines by day when the lamps are needed at night, but they work by using energy 
    accumulated during the day from a solar panel. The solar panel produces electricity which charges (заряжать) a 
    battery. When the sun goes down, the battery power is then used for lighting. Each lamp has its own panel so the 
    system can be used for one individual light or a number of them. In the south of Saudi Arabia a motorway tunnel 
    miles from any power supply is lit day and night by solar-powered devices. The solar panels provide power during 
    the day and charge batteries which accumulate enough power to light the tunnel at night. The generation of 
    electricity by batteries is still expensive but the advantage of sun-powered lamps is that they can bring light 
    to areas distant from any other power supply. There is one more advantage of solar power: not only it is 
    unlimited, but also its use does not pollute the environment. That is why it is very important to develop devices 
    which make it possible to transform solar power into mechanical or electric forms of power. Non-traditional 
    Renewable Sources of Energy It is known that much is being done in the world today for the development of 
    non-traditional sources of energy. Without them the Earth cannot support its present population of 5 billion 
    people and probably 8 billion people in the 21st century. Now we are using traditional power sources, that is, 
    oil, natural gas, coal and water power with the consumption of more than 50 billion barrels per year. It is 
    evident that these sources are not unlimited. That is why it is so important to use such renewable sources of 
    energy as the sun, wind, geothermal energy and others. Research is being carried out in these fields. One of the 
    most promising (перспективный) research is the development of power stations with direct transformation of solar 
    energy into electricity on the basis of photo-effect. It was Russia that was the first in the world to develop 
    and test a photoelectric battery of 32,000 volts and effective area of only 0.5(зиро поинт файв) sq.m., 
    which made it possible to concentrate solar radiation. This idea is now being intensively developed in many 
    countries. However, the efficiency of a solar power station is considerably reduced because of the limited time 
    of its work during the year. But it is possible to improve the efficiency of solar power stations by developing 
    different combinations of solar power stations and traditional ones — thermal, atomic and hydraulic. Today some 
    engineers are working at the problem of developing electric power stations with the use of a thermal-chemical 
    cycle. It will operate on products of the transformation of solar energy, whereas the «solar» chemical reactor 
    uses CO2 and water steam of the thermal power station. The result is that we have a closed cycle. In Kamchatka 
    there are geothermal power stations operating on hot water-steam mixture from the depths of about a kilometre. In 
    some projects water will be heated by the warmth of mountains at a depth of four-five km. It is planned that 
    plants working on the energy of the solar heat provided by the sun will be built on a larger scale. 
"""
    #summ = T5Summary()
    print(summ.summarize(text, 50, 500)[0]['summary_text'])
