var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var accessControlAllowOrigin = "_AccessControlAllowOrigin";
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: accessControlAllowOrigin,
        policy =>
        {
            policy.WithOrigins("https://localhost:7107")
                .AllowAnyHeader()
                .AllowAnyMethod();
        }
    );
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(accessControlAllowOrigin);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
