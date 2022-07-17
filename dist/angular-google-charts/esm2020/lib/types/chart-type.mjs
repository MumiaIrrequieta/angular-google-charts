export var ChartType;
(function (ChartType) {
    ChartType["AnnotationChart"] = "AnnotationChart";
    ChartType["AreaChart"] = "AreaChart";
    ChartType["Bar"] = "Bar";
    ChartType["BarChart"] = "BarChart";
    ChartType["BubbleChart"] = "BubbleChart";
    ChartType["Calendar"] = "Calendar";
    ChartType["CandlestickChart"] = "CandlestickChart";
    ChartType["ColumnChart"] = "ColumnChart";
    ChartType["ComboChart"] = "ComboChart";
    ChartType["PieChart"] = "PieChart";
    ChartType["Gantt"] = "Gantt";
    ChartType["Gauge"] = "Gauge";
    ChartType["GeoChart"] = "GeoChart";
    ChartType["Histogram"] = "Histogram";
    ChartType["Line"] = "Line";
    ChartType["LineChart"] = "LineChart";
    ChartType["Map"] = "Map";
    ChartType["OrgChart"] = "OrgChart";
    ChartType["Sankey"] = "Sankey";
    ChartType["Scatter"] = "Scatter";
    ChartType["ScatterChart"] = "ScatterChart";
    ChartType["SteppedAreaChart"] = "SteppedAreaChart";
    ChartType["Table"] = "Table";
    ChartType["Timeline"] = "Timeline";
    ChartType["TreeMap"] = "TreeMap";
    ChartType["WordTree"] = "wordtree";
})(ChartType || (ChartType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYW5ndWxhci1nb29nbGUtY2hhcnRzL3NyYy9saWIvdHlwZXMvY2hhcnQtdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxTQTJCWDtBQTNCRCxXQUFZLFNBQVM7SUFDbkIsZ0RBQW1DLENBQUE7SUFDbkMsb0NBQXVCLENBQUE7SUFDdkIsd0JBQVcsQ0FBQTtJQUNYLGtDQUFxQixDQUFBO0lBQ3JCLHdDQUEyQixDQUFBO0lBQzNCLGtDQUFxQixDQUFBO0lBQ3JCLGtEQUFxQyxDQUFBO0lBQ3JDLHdDQUEyQixDQUFBO0lBQzNCLHNDQUF5QixDQUFBO0lBQ3pCLGtDQUFxQixDQUFBO0lBQ3JCLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0lBQ2Ysa0NBQXFCLENBQUE7SUFDckIsb0NBQXVCLENBQUE7SUFDdkIsMEJBQWEsQ0FBQTtJQUNiLG9DQUF1QixDQUFBO0lBQ3ZCLHdCQUFXLENBQUE7SUFDWCxrQ0FBcUIsQ0FBQTtJQUNyQiw4QkFBaUIsQ0FBQTtJQUNqQixnQ0FBbUIsQ0FBQTtJQUNuQiwwQ0FBNkIsQ0FBQTtJQUM3QixrREFBcUMsQ0FBQTtJQUNyQyw0QkFBZSxDQUFBO0lBQ2Ysa0NBQXFCLENBQUE7SUFDckIsZ0NBQW1CLENBQUE7SUFDbkIsa0NBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQTNCVyxTQUFTLEtBQVQsU0FBUyxRQTJCcEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDaGFydFR5cGUge1xuICBBbm5vdGF0aW9uQ2hhcnQgPSAnQW5ub3RhdGlvbkNoYXJ0JyxcbiAgQXJlYUNoYXJ0ID0gJ0FyZWFDaGFydCcsXG4gIEJhciA9ICdCYXInLFxuICBCYXJDaGFydCA9ICdCYXJDaGFydCcsXG4gIEJ1YmJsZUNoYXJ0ID0gJ0J1YmJsZUNoYXJ0JyxcbiAgQ2FsZW5kYXIgPSAnQ2FsZW5kYXInLFxuICBDYW5kbGVzdGlja0NoYXJ0ID0gJ0NhbmRsZXN0aWNrQ2hhcnQnLFxuICBDb2x1bW5DaGFydCA9ICdDb2x1bW5DaGFydCcsXG4gIENvbWJvQ2hhcnQgPSAnQ29tYm9DaGFydCcsXG4gIFBpZUNoYXJ0ID0gJ1BpZUNoYXJ0JyxcbiAgR2FudHQgPSAnR2FudHQnLFxuICBHYXVnZSA9ICdHYXVnZScsXG4gIEdlb0NoYXJ0ID0gJ0dlb0NoYXJ0JyxcbiAgSGlzdG9ncmFtID0gJ0hpc3RvZ3JhbScsXG4gIExpbmUgPSAnTGluZScsXG4gIExpbmVDaGFydCA9ICdMaW5lQ2hhcnQnLFxuICBNYXAgPSAnTWFwJyxcbiAgT3JnQ2hhcnQgPSAnT3JnQ2hhcnQnLFxuICBTYW5rZXkgPSAnU2Fua2V5JyxcbiAgU2NhdHRlciA9ICdTY2F0dGVyJyxcbiAgU2NhdHRlckNoYXJ0ID0gJ1NjYXR0ZXJDaGFydCcsXG4gIFN0ZXBwZWRBcmVhQ2hhcnQgPSAnU3RlcHBlZEFyZWFDaGFydCcsXG4gIFRhYmxlID0gJ1RhYmxlJyxcbiAgVGltZWxpbmUgPSAnVGltZWxpbmUnLFxuICBUcmVlTWFwID0gJ1RyZWVNYXAnLFxuICBXb3JkVHJlZSA9ICd3b3JkdHJlZSdcbn1cbiJdfQ==