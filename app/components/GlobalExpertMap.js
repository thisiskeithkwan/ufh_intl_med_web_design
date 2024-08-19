import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

export default function GlobalExpertMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    const svg = d3.select("#map-container").append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 960 500")
      .attr("preserveAspectRatio", "xMidYMid meet");

    const width = 960;
    const height = 500;

    const projection = d3.geoMercator()
      .scale(140)
      .translate([width / 2, height / 1.4]);

    const path = d3.geoPath().projection(projection);

    const g = svg.append("g");

    // Load world map data
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(function(world) {
      g.selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append("path")
        .attr("class", "country")
        .attr("d", path)
        .attr("fill", "#e0e0e0")  // Light gray fill for countries
        .attr("stroke", "#fff")   // White borders
        .attr("stroke-width", 0.5);

      // Data for expert locations
      const locations = [
        {name: "Mayo Clinic", country: "USA", coordinates: [-92.4666, 44.0225]},
        {name: "HSS", country: "USA", coordinates: [-73.9548, 40.7686]},
        {name: "SickKids", country: "USA", coordinates: [-79.3832, 43.6569]},
        {name: "MGB", country: "USA", coordinates: [-71.0698, 42.3601]},
        {name: "Presbyterian", country: "USA", coordinates: [-73.9418, 40.7421]},
        {name: "Sloan Kettering", country: "USA", coordinates: [-73.9568, 40.7645]},
        {name: "Union Hospital", country: "Hong Kong", coordinates: [114.1749, 22.2829]},
        {name: "Queen Mary", country: "Hong Kong", coordinates: [114.1304, 22.2704]},
        {name: "CUHK", country: "Hong Kong", coordinates: [114.2072, 22.4194]},
        {name: "HKU", country: "Hong Kong", coordinates: [114.1370, 22.2830]},
        {name: "Parkway", country: "Singapore", coordinates: [103.8440, 1.3024]},
        {name: "Raffles", country: "Singapore", coordinates: [103.8500, 1.3180]},
        {name: "Bumrungrad", country: "Thailand", coordinates: [100.5520, 13.7470]},
        {name: "Bangkok Dusit", country: "Thailand", coordinates: [100.5408, 13.7380]},
        {name: "Jetanin", country: "Thailand", coordinates: [100.5595, 13.7861]}
      ];

      // Add points for each location
      g.selectAll("circle")
        .data(locations)
        .enter().append("circle")
        .attr("cx", d => projection(d.coordinates)[0])
        .attr("cy", d => projection(d.coordinates)[1])
        .attr("r", 6)
        .attr("fill", "#003A8C")  // Blue fill for points
        .attr("stroke", "#fff")   // White border for points
        .attr("stroke-width", 2);

      // Add tooltip
      const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "1px solid #ddd")
        .style("padding", "10px")
        .style("border-radius", "5px");

      g.selectAll("circle")
        .on("mouseover", function(event, d) {
          tooltip.transition()
            .duration(200)
            .style("opacity", .9);
          tooltip.html(d.name + "<br/>" + d.country)
            .style("left", (event.pageX + 5) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        });
    });

    mapRef.current = true;
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-lg">
      <div id="map-container" className="w-full lg:w-3/4 h-[600px]"></div>
      <div className="w-full lg:w-1/4 p-6 bg-white">
        <h3 className="text-2xl font-bold mb-6 text-[#003A8C]">合作机构包括：</h3>
        <ul className="space-y-4">
          {[
            { country: "美国", institutions: "Mayo, HSS, SickKids, MGB, 纽约长老会, 纪念斯隆凯特琳癌症中心等" },
            { country: "香港", institutions: "养和医疗，玛丽医院，CUHK，HKU" },
            { country: "新加坡", institutions: "Parkway, Raffles" },
            { country: "泰国", institutions: "Bumrungrad，Bangkok Dusit Medical Services，Jetanin" }
          ].map((item, index) => (
            <li key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <strong className="text-[#003A8C] text-lg block mb-1">{item.country}：</strong>
              <span className="text-gray-700">{item.institutions}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}